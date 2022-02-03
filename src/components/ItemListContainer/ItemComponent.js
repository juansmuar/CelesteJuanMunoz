import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from "./ItemCount";

const ItemComponent = ({data}) => {
	return (
			<Card>
				<CardContent>
					<CardMedia
						component='img'
						height='200'
						image={data.thumbnailUrl}
						alt='thumbnail'
					/>
                	<Typography gutterBottom variant="h5" component="div">{data.id}</Typography>
                	<Typography variant="body1" color="text.secondary">{data.title}</Typography>
					<Typography variant="body2" color="text.secondary">{data.id}</Typography>
					<ItemCount initial={1} stock={10} />
				</CardContent>
			</Card>
	);
};

export default ItemComponent;