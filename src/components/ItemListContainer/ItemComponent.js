import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const ItemComponent = ({data}) => {
	return (
			<Card>
				<CardContent>
					<CardMedia
						component='img'
						height='250'
						image={data.img}
						alt='thumbnail'
					/>
                	<Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
                	<Typography variant="body1" color="text.secondary">{data.description}</Typography>
					<Typography variant="body2" color="text.secondary">Precio: {data.price}K</Typography>
					<Button size="small" >Comprar</Button>	
				</CardContent>
			</Card>
	);
};

export default ItemComponent;