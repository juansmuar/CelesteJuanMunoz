import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import ItemComponent from '../../components/ItemListContainer/ItemComponent';
import ItemCount from '../../components/ItemListContainer/ItemCount';


const ItemDetails = () => {
	const [details, setDetail] = useState({});


	let id = useParams();

	let itemID = id.id;
  
	useEffect(() => {
		axios.get(`/data${itemID}.json`).then(response => {
			setDetail(response.data)
		  })
		  // if error
		  .catch(function(error) {
			console.log(error);
		  });
	}, [itemID]);

	console.log(details);
  
	return (
		<div>
			<ItemComponent data={details} />
			<ItemCount initial={details.initial} stock={details.stock} />
		</div>
	  );
	};

export default ItemDetails;