import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../Utils/api";
import "../Styles/Users.css"

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div>
      <h1>All users</h1>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li className="user-card" key={user.username}>
              <Link to={`/users/${user.username}`}>
                <div>
                  <h2>{user.username}</h2>
                  <img className="user-image" src={user.avatar_url} alt={user.username} />
                  <button>Kudos: {user.kudos}</button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
