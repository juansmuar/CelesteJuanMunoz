import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Item = ({data}) => {
	return (
			<Card>
				<CardContent>
					<CardMedia
						component='img'
						height='auto'
						image={data.strDrinkThumb}
						alt='thumbnail'
					/>
                	<Typography gutterBottom variant="h5" component="div">{data.strDrink}</Typography>
                	<Typography variant="body1" color="text.secondary">{data.strInstructions}</Typography>
					<Typography variant="body2" color="text.secondary">{data.strGlass}</Typography>
				</CardContent>
			</Card>
	);
};

export default Item;