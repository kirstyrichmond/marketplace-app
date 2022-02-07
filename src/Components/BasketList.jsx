import React, { useContext, useEffect, useState } from 'react';
import Link from 'react-router-dom'
// import { BasketContext } from '../Contexts/Basket-Context';
import { UserContext } from '../Contexts/User-Context'
import { getBasket } from '../Utils/api';

export const BasketList = () => {
    console.log("im inside the basket list");
    const [basketItems, setBasketItems] = useState([]);
    const { loggedInUser } = useContext(UserContext);
  
    useEffect(() => {
      getBasket(loggedInUser.username).then((res) => {
        setBasketItems(res);
      });
    }, [loggedInUser.username, basketItems]);
  
    return (
      <>
        <main>
          <h2>🧺 Your basket:</h2>
          <ul className="itemsList">
            {basketItems.map((item) => {
              return (
                <>
                  <Link key={item.item_name} to={`/items/${item.item_id}`}>
                    <li key={item.item_id} className="itemList">
                      <img
                        src={item.img_url}
                        alt={item.item_name}
                        width="50"
                        className="listImagePreview"
                      ></img>
                      <br></br>
                      {item.item_name} (Price: {item.price})
                    </li>
                  </Link>
                  
                </>
              );
            })}
          </ul>
        </main>
      </>
    );
};
