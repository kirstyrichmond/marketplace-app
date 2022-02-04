import React, { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";
import Items from "./Items";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [catSelection, setCatSelection] = useState("all");

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  function handleChange(event) {
    console.log(event.target.value)
    setCatSelection(event.target.value);
  }

  console.log(catSelection)

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   setCatSelection(event.target.value);
  // }


  return (
    <>
      <div>
        <form >
          <select
            className="select"
            name="category"
            onChange={handleChange}
            value={catSelection}
          >
            <option value="all">All</option>
            {categories.map((category) => {
              return <option value={category.category_name} key={category.category_name}>{category.category_name}</option>;
            })}
          </select>
          {/* <button className="button" type="submit">
            Search items
          </button> */}
        </form>
      </div>
      <Items handleChange={() => handleChange} />
    </>
  );
};

export default Categories;
