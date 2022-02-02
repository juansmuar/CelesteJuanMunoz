import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";
import './ItemListContainer.css';

const ItemListContainer = ({name, description, price, img}) => {
  return (
    <div className='Container'>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={require('./images/chocoCake.jpg')}
          alt="menu-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{name}</Typography>
          <Typography variant="body1" color="text.secondary">{description}</Typography>
          <Typography variant="body2" color="text.secondary">{price}</Typography>
        </CardContent>
        <ItemCount 
          initial={1}
          stock={10}
        />
      </Card>
    </div>
  );
}

export default ItemListContainer;