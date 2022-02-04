import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Basket from "./Components/Basket";
import Categories from "./Components/Categories";
import Home from "./Components/home";
import Items from "./Components/Items";
import Nav from "./Components/Nav";
import Orders from "./Components/Orders";
import Users from "./Components/Users";
import User from "./Components/User";
import { useState } from "react";
import UserContext from "./Components/LoggedInUser";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Paul-C",
    avatar_url: "newUrl",
    kudos: 5,
  });

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Nav loggedInUser={loggedInUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/items" element={<Items />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<User />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
