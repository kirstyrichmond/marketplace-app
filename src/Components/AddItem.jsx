import React, {useState} from "react";
import axios from "axios";



const AddItem = () => {

    const [item, setItem] = useState({
        item_name: "",
          description: "" ,
          img_url: "",
          price: 0,
          category_name: ""
    });

    console.log(item)
    function handleSubmit(event) {
      
      event.preventDefault();
      const newItem = {
          "item_name": item.item_name,
          "description": item.description,
          "img_url": item.img_url,
          "price": item.price,
          "category_name": item.category_name
      }
      console.log(newItem);
      axios.post("https://nc-marketplace.herokuapp.com/api/items", { newItem }).then((res) => {
          console.log(res.data)
      })
  }
    
    function handleChange(event) {
        console.log({ item_name: event.target.value } description: event.target.value  })
        setItem()
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item_name"
          placeholder="Item name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="img_url"
          placeholder="Image URL"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        ></input>
        <select name="category_name">
          <option value="Electronics">Electronics</option>
          <option value="Household">Household</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
