import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
import ItemPage from "./Components/ItemPage";
// import getSingleUser from "./Utils/api";
import AddToBasket from "./Components/AddToBasket";
import { BasketContext } from "./Contexts/Basket-Context";

function App() {
  const [basketList, setBasketList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "Paul-C",
    avatar_url:
      "https://images.prismic.io/northcoders/bbbb23b9-a160-4726-8dec-57b17d6de8da_Paul+Copley.jpg",
    kudos: 5,
  });

  const [catSelection, setCatSelection] = useState("All");

  const isLoggedIn = loggedInUser !== null;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <BasketContext.Provider value={{ basketList, setBasketList }}>
        <BrowserRouter>
          <div className="App">
            <Nav loggedInUser={loggedInUser} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/items"
                element={
                  <>
                    <Categories
                      catSelection={catSelection}
                      setCatSelection={setCatSelection}
                    />
                    <Items catSelection={catSelection} />
                  </>
                }
              />
              <Route path="/items/:item_id" element={<ItemPage />} />
              <Route path="/users" element={<Users />} />
              <Route
                path="/users/:username"
                element={
                  <>
                    <User />
                  </>
                }
              />
              {/* <Route path="/basket" element={<Basket />} /> */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/add_item" element={<AddItem />} />
              <Route path="/users/:username/basket" element={<AddToBasket />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BasketContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
