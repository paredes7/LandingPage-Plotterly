<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\OrderStatus;
use App\Models\PaymentMethod;
use App\Models\OrderItem;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $fillable = [
        'user_id',
        'status_id',
        'payment_method_id',
        'total',
        'note',
        'delivery_date',   // agregado
        'delivery_time',   // agregado
    ];

    protected $casts = [
        'total' => 'decimal:2',
        'delivery_date' => 'date', // casteo a date
    ];

    // Relaciones
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->belongsTo(OrderStatus::class, 'status_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}
