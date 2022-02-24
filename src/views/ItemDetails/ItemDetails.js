import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemComponent from '../../components/ItemListContainer/ItemComponent';
import ItemCount from '../../components/ItemListContainer/ItemCount';

import { collection, query, where, getDocs, documentId, } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

const ItemDetails = () => {
	const [details, setDetail] = useState([]);

	let id = useParams();

	let itemID = id.id;
  
	useEffect(() => {
		const getDetail = async () => {
			const q = query(
				collection(db, 'menu'),
				where(documentId(), '==', itemID)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setDetail(docs);
		};
		getDetail();
	}, [itemID]);
  
	return (
		<div>
			{details.map((detail) => {
        		return (
					<div>
              			<ItemComponent data={detail} />
						<ItemCount initial={detail.initial} stock={detail.stock} />
					</div>
        		);
      		})}
		</div>
	  );
	};

export default ItemDetails;