import React, { useEffect, useState } from 'react';
import { getItemById } from '../Utils/api';
import { useParams } from "react-router-dom"
import '../Styles/item-page.css'
import DeleteItem from './DeleteItem';
import AddToBasket from './AddToBasket';

function ItemPage({ items }) {
    const { item_id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemById(item_id).then(item => {
            setItem(item)
        })
    }, [item_id])

  return <div>
      <main className='product-page'>
        <h1>{item.item_name}</h1>
        <img alt={item.item_name} className='product-page-image' src={item.img_url} />
        <p>{item.description}</p>
        <p>£{item.price}</p>
        <p>{item.category_name}</p>
      </main>
      <AddToBasket item={item} />
      <DeleteItem item_id={item_id} />
  </div>;
}

export default ItemPage;
