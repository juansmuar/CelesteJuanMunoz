import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ChocoCake from "./images/chocoCake.jpg";

const ItemListContainer = ({name, description, price, img}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={ChocoCake}
        alt="menu-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography variant="body1" color="text.secondary">{description}</Typography>
        <Typography variant="body2" color="text.secondary">{price}</Typography>
      </CardContent>
    </Card>
  );
}

export default ItemListContainer;