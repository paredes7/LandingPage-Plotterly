<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use Cart;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderConfirmation;

class PedidosController extends Controller
{
    public function index()
    {
        return Inertia::render('checkout');
    }

   public function store(Request $request)
{
    // Validación
    $request->validate([
        'user_id' => 'required|exists:users,id',
        'shipping_type' => 'required|in:local,envio',
        'delivery_date' => 'required|date',
        'delivery_time' => 'required|string',
        'address' => 'required|string',
        'cart' => 'required|array|min:1',
        'cart.*.id' => 'required|exists:products,id',
        'cart.*.quantity' => 'required|integer|min:1',
        'cart.*.price' => 'required|numeric|min:0',
        'subtotal' => 'required|numeric|min:0',
        'total' => 'required|numeric|min:0',
    ]);

    // Log de debug inicial
    \Log::info('Pedido recibido', $request->all());

    try {
        // Crear pedido
        $order = Order::create([
            'user_id' => $request->user_id,
            'status_id' => 1,
            'payment_method_id' => $request->payment_method_id ?? 1,
            'total' => $request->total,
            'note' => $request->shipping_type === 'envio' ? $request->address : 'Recojo en el local',
            'delivery_date' => $request->delivery_date,
            'delivery_time' => $request->delivery_time,
        ]);

        // Crear items
        $orderItems = [];
        foreach ($request->cart as $item) {
            $orderItem = OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'quantity' => $item['quantity'],
                'price' => round($item['price'], 2),
                'subtotal' => round($item['quantity'] * $item['price'], 2),
            ]);
            $orderItems[] = $orderItem;
        }

        // Intentar enviar correo y loguear errores si falla
        try {
            $user = $order->user;
            Mail::to($user->email)->send(new OrderConfirmation($order, $orderItems));
        } catch (\Exception $mailException) {
            \Log::error('Error enviando correo: '.$mailException->getMessage());
            // También puedes devolverlo al frontend
            return response()->json([
                'status' => 'error',
                'message' => 'Pedido creado, pero fallo el envío de correo: '.$mailException->getMessage()
            ], 500);
        }

        // Vaciar carrito
        Cart::destroy();

        // Responder con éxito (JSON para que Inertia lo reciba)
        return response()->json([
            'status' => 'success',
            'message' => 'Tu pedido se realizó con éxito!',
            'order_id' => $order->id
        ]);

    } catch (\Exception $e) {
        // Log completo del error
        \Log::error('Error creando pedido: '.$e->getMessage(), [
            'stack' => $e->getTraceAsString()
        ]);

        // Devuelve el error directamente para debug
        return response()->json([
            'status' => 'error',
            'message' => 'Error al crear el pedido: '.$e->getMessage(),
            'trace' => $e->getTrace()
        ], 500);
    }
}
}
