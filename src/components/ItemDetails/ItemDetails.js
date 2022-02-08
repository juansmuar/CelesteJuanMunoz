import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';


const ItemDetails = () => {
	const [data, setData] = useState({});

    useEffect(() => {
	    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(response => response.json())
		.then(data => setData(data.drinks[0]));
    }, []);

	return (
		<div>
			<Item data={data} />
		</div>
	);
};

export default ItemDetails;