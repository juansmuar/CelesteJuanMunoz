import React, {useState} from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({initial, stock}) =>{

    const [counter, setCounter] = useState(initial);

    const handlerCounterDown = () =>{
        if (counter > 0) {
            setCounter( counter - 1 );
        }
    };

    const handlerCounterUp = () =>{
        if (counter < stock){
            setCounter( counter + 1 );
        }
    };

    return (
        <div className='ItemCount'>
            <Button size="small" onClick={handlerCounterDown}>Quitar</Button>
            <p>Cantidad: {counter}</p>
            <Button size="small" onClick={handlerCounterUp}>Añadir</Button>
        </div>
    );
};

export default ItemCount;