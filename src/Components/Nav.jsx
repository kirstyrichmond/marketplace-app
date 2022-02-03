import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/items">Items</Link>
      <Link to="/users">Users</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/users/${username}">User</Link>
    </nav>
  );
};

export default Nav;
