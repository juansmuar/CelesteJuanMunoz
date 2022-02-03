import React, { useState, useEffect } from 'react';
import ItemComponent from './ItemComponent';
import './ItemComponent.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setItems(json));
  }, []);

  return (
    <div className='ItemList'>
      {items.map((item) => {
        return (
          <div key={item.id} className='Container'>
            <ItemComponent data={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;