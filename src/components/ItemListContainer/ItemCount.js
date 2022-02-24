import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './ItemCount.css';

const ItemCount = ({initial, stock}) =>{

    const [counter, setCounter] = useState(initial);

    const handlerCounterDown = () =>{
        if (counter > 1) {
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
            <Link to={'/Cart/'}>
                <Button size="small" >Comprar</Button>
            </Link>
        </div>
    );
};

export default ItemCount;