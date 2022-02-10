import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemComponent from './ItemComponent';
import './ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  //console.log(items);

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className='ItemList-Container'>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`} className='Link'>
              <ItemComponent data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;