import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemComponent from './ItemComponent';
import './ItemList.css';

import { collection, query, getDocs } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

const ItemList = () => {
  const [items, setItems] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const q = query(collection(db, 'menu'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			console.log(docs);
			setItems(docs);
		};
		getItems();
	}, []);

  return (
    <div className='ItemList-Container'>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <ItemComponent data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;