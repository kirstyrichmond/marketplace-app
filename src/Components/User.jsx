import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import { Link, useParams } from "react-router-dom";
import { getSingleUser } from "../Utils/api";

const User = () => {
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
        <img src={user.avatar_url} />
        <h2>{user.kudos}</h2>
      </div>
      <Link to="/orders">Orders</Link>
    </>
  );
};

export default User;
