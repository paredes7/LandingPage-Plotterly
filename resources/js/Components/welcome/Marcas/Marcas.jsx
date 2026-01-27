// resources/js/Pages/Servicios/Index.jsx
import LogoWall from '@/Components/welcome/Marcas/LogoWall';
import { MARCAS_MOCK } from '@/Components/welcome/Marcas/marcasData';

// Dentro de tu función principal:
export default function Marcas() {
    return (
        <>
            
            <LogoWall 
                marcas={MARCAS_MOCK} 
                titulo="Marcas con las que trabajé" 
            />
            
        </>
    );
}