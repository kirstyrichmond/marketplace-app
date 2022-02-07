import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { postItem, getCategories } from "../Utils/api";

const AddItem = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [newItemName, setNewItemName] = useState("")
  const [newItemDesc, setNewItemDesc] = useState("")
  const [newItemURL, setNewItemURL] = useState("")
  const [newItemPrice, setNewItemPrice] = useState("")
  const [newCategory, setNewCategory] = useState("")

    useEffect(() => {
      getCategories().then((catSelection) => {
        setCategories(catSelection)
      })
    }, [])

    const handleItemNameChange = (event) => {
      setNewItemName(event.target.value)
    }
    const handleItemDescChange = (event) => {
      setNewItemDesc(event.target.value)
    }
    const handleItemURLChange = (event) => {
      setNewItemURL(event.target.value)
    }
    const handleItemPriceChange = (event) => {
      setNewItemPrice(event.target.value)
    }
    const handleCategoryChange = (event) => {
      setNewCategory(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      const newItem = {
          item_name: newItemName,
          description: newItemDesc,
          img_url: newItemURL,
          price: newItemPrice,
          category_name: newCategory
      }

      postItem(newItem).then((item) => {
        console.log(item)
        const { item_id } = item
        navigate(`/items/${item_id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h3>Add a new item:</h3>

      <form className="add-item-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
        required
          type="text"
          value={newItemName}
          id="itemName"
          name="itemName"
          placeholder="Item name"
          onChange={handleItemNameChange}
        ></input>
        <br></br>
        <label>Description:</label>
        <input
          required
          type="text"
          value={newItemDesc}
          name="itemDesc"
          id="itemDesc"
          placeholder="Description"
          onChange={handleItemDescChange}
        ></input>
        <br></br>
        <label>Image URL:</label>
        <input
          required
          type="url"
          value={newItemURL}
          name="itemURL"
          id="itemURL"
          placeholder="Image URL"
          onChange={handleItemURLChange}
        ></input>
        <br></br>
        <label>Price:</label>
        <input
          type="number"
          value={newItemPrice}
          name="itemPrice"
          id="itemPrice"
          placeholder="Price"
          onChange={handleItemPriceChange}
        ></input>
        <br></br>
        <select value={newCategory} name="itemCategory" id="itemCategory" onChange={handleCategoryChange}>
          <option value="" disabled defaultValue>Select Category</option>

          {
            categories.map((category) => {
              return (
                <option key={category.category_name} value={category.category_name}>
                  {category.category_name}
                </option>
              )
            })
          }
        </select>
        <br></br>
        <button type="submit" value="Submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
