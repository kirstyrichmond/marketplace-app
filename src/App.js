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
import AddItem from "./Components/AddItem";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Paul-C",
    avatar_url: "newUrl",
    kudos: 5,
  });

  const [catSelection, setCatSelection] = useState("All");
  

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Nav loggedInUser={loggedInUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<><Categories catSelection={catSelection} setCatSelection={setCatSelection} /><Items catSelection={catSelection} /></>} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:username" element={<User />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/add_item" element={<AddItem />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
