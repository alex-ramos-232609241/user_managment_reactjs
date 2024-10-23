import React, { useState } from 'react';
import '../index.css';

const FechaActual = () => {
    const [fechaActual, setFechaActual] = useState((new Date()).toString());
    setInterval(() => {
        setFechaActual((new Date()).toString())
    }, 1000);
return (
    <div className='colorButton'>
        <h5>{fechaActual}</h5>
        </div>    
        );
    
}
export default FechaActual;
