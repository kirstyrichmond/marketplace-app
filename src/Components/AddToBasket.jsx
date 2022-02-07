import React, { useContext } from 'react';
import { addItemToBasket } from '../Utils/api';
import UserContext from './LoggedInUser';

const AddToBasket = ({ item }) => {

    const { loggedInUser } = useContext(UserContext)

    const postToBasket = () => {
        addItemToBasket(loggedInUser.username, item)
    }

  return <div>
      <button className='add-to-basket-btn' onClick={postToBasket}>
          Add to basket
      </button>
  </div>;
};

export default AddToBasket;
