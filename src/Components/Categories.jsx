import React, { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [catSelection, setCatSelection] = useState("default");

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setCatSelection("default");
  }

  function handleChange(event) {
    setCatSelection(event.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <select
            className="select"
            name="category"
            onChange={handleChange}
            value={catSelection}
          >
            <option value="default">All</option>
            {categories.map((category) => {
              return <option>{category.category_name}</option>;
            })}
          </select>
        </form>
      </div>
    </>
  );
};

export default Categories;
