import React, { useState, useEffect } from 'react';
import miFoto1 from '../images/1.png'
import miFoto2 from '../images/2.jpg'

export const Presentacion = () => {

    const control = [miFoto1, miFoto2]
    const [fotos, setFotos] = useState(0)

    // Funcion para estar cambiando de imágen

    useEffect(() => {
        let controlArray = 0
        let totalLista = control.length
        const intervalId = setInterval(() => {
            if (controlArray >= totalLista - 1) { controlArray = -1 }
            setFotos(controlArray = controlArray + 1);
        }, 16000); // Este tiempo va de la mano con el css para evitar conflicto
        return () => clearInterval(intervalId);
    }, [control.length]);

    //hacemos un componente interno para garantizar el uso de los estilos al renderizar
    const Presentation = () => {
        return (
            <div className='containerImg'>
                <img src={control[fotos]} alt='Imagen de perfil' className='imgRound' />
                <i style={{fontSize:'15px'}}>"La victoria más difícil es la victoria sobre uno mismo" (Aristóteles)</i>
            </div>
        )
    }


    // Retornamos el componente
    return (
        <div>
            <Presentation />
        </div>
    )
}

// Exportamos el componente envuelto en React.memo para evitar que se renderice cuando el padre haga un cambio
export const MemoPresentacion = React.memo(Presentacion);
