import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Basket from "./Components/Basket";
import Categories from "./Components/Categories";
import Home from "./Components/home";
import Items from "./Components/Items";
import Nav from "./Components/Nav";
import Orders from "./Components/Orders";
import Users from "./Components/Users";
import User from "./Components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
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
    </BrowserRouter>
    
  );
}

export default App;
