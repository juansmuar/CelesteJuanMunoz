import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemComponent = ({data}) => {
	return (
			<Card>
				<CardContent>
					<CardMedia
						component='img'
						height='250'
						image={data.image}
						alt='thumbnail'
					/>
                	<Typography gutterBottom variant="h5" component="div">{data.name}</Typography>
                	<Typography variant="body1" color="text.secondary">{data.description}</Typography>
					<Typography variant="body2" color="text.secondary">Precio: {data.price}K</Typography>			
				</CardContent>
			</Card>
	);
};

export default ItemComponent;