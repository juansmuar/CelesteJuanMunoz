import React, {useState} from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial}) =>{
    const [counter, setCounter] = useState({initial});

    const handlerCounterDown = () =>{
        setCounter({ counter: counter - 1 });
    };

    const handlerCounterUp = () =>{
        setCounter({ counter: counter + 1 });
    };

    return (
        <div>
            <Button size="small" onClick={handlerCounterDown}>Quitar</Button>
            <p>Cantidad: {counter}</p>
            <Button size="small" onClick={handlerCounterUp}>Añadir</Button>
        </div>
    );
};

export default ItemCount;