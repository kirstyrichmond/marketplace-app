import React, { useEffect, useState, useContext } from "react";
import Orders from "./Orders";
import { Link, useParams } from "react-router-dom";
import { getSingleUser } from "../Utils/api";
// import { BasketContext } from "../Contexts/Basket-Context";
import { UserContext } from "../Contexts/User-Context";


const User = () => {
  // const { basket, setBasket } = useContext(BasketContext)
    // const { loggedInUser } = useContext(UserContext)
    console.log("im inside the basket list");

  const [user, setUser] = useState({});
    
    const { username } = useParams();

  useEffect(() => {
    getSingleUser(username).then((res) => {
      setUser(res);
    });
  }, [username]);

  return (
    <>
      <div>
        <h1>{user.username}</h1>
        <img className="user-profile-pic" alt={user.username} src={user.avatar_url} />
        <h2>Kudos: {user.kudos}</h2>
      </div>
      <Link to="/orders">Orders</Link>
    </>
  );
};

export default User;
