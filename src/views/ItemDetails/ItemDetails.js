import React, { useState, useEffect } from 'react';
import ItemComponent from '../../components/ItemListContainer/ItemComponent';


const ItemDetails = () => {
	const [details, setDetail] = useState([]);
  
	useEffect(() => {
		fetch('data.json')
			.then((response) => response.json())
			.then((json) => setDetail(json));
	}, []);
  
	return (
	  <div>
		{details.map((detail) => {
		  return (
			<div key={detail.id}>
				<ItemComponent data={detail} />
			</div>
		  );
		})}
	  </div>
	);
  };

export default ItemDetails;