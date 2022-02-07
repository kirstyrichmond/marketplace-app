import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from './LoggedInUser'
import "../Styles/nav.css"

const Nav = () => {
  const { loggedInUser } = useContext(UserContext)
  console.log(loggedInUser, "<< logged in user: nav")
  console.log(loggedInUser.avatar_url)

  return (
    <nav>
      <Link className="nav-btn" to="/">Home</Link>
      <Link className="nav-btn" to="/items">Items</Link>
      <Link className="nav-btn" to="/users">Users</Link>
      <Link className="nav-btn" to={`/users/${loggedInUser.username}/basket`}>Basket</Link>
      <Link to={`/users/${loggedInUser.username}`}>
      <div className="nav-profile">
      <span>{loggedInUser.username}</span>
      <img className="nav_avatar" src={loggedInUser.avatar_url} alt={loggedInUser.username}></img>
      </div>

      </Link>
    </nav>
  );
};

export default Nav;
