import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext, { userContext } from './LoggedInUser'

const Nav = () => {
  const { loggedInUser } = useContext(UserContext)

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/items">Items</Link>
      <Link to="/users">Users</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/users/${username}">User</Link>
      <span>{loggedInUser.username}</span>
      <img src={loggedInUser.avatar_url} alt={loggedInUser.username}></img>
    </nav>
  );
};

export default Nav;
