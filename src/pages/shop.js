import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItem();
  }, [] ); // [] makes effect run on mount

  const [item,setItems] = useState([]);
  
  const fetchItems = async() => {
    const allItems = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    );
    const item = await fetchItem.json();
    setItem(items.items);
  }

  return (
    <div >
      <h1>Shop Page</h1>
      {items.map(item => (
        <h2 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.name}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
