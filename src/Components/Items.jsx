import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems, getItemsByCategory } from "../Utils/api";
import "../Styles/items.css";
import Categories from "./Categories";

const Items = ({ handleChange }) => {
  const [items, setItems] = useState([]);

  // console.log(handleChange)

  getItemsByCategory(handleChange)

  useEffect(() => {
    getItems().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div>
      <h1>In Items</h1>
      <Categories />
      <ul>
        {items.map((item) => {
          return (
            <Link key={item.item_id} to={`/items/${item.item_id}`}>
              <div className="item-list">
                <li>{item.item_name}</li>
                <li>{item.description}</li>
                <li><img className="product-image" src={item.img_url}/></li>
                <li>{item.price}</li>
                <li>{item.category_name}</li>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Items;
