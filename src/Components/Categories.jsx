import React, { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";
import Items from "./Items";

const Categories = ({ catSelection, setCatSelection }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  function handleChange(event) {
    setCatSelection(event.target.value);
  }

  return (
    <>
      <div>
        <form>
          <select
            className="select"
            name="category"
            onChange={handleChange}
            value={catSelection}
          >
            <option value="All">All</option>
            {categories.length
              ? categories.map((category) => {
                  return (
                    <option
                      value={category.category_name}
                      key={category.category_name}
                    >
                      {category.category_name}
                    </option>
                  );
                })
              : null}
          </select>
        </form>
      </div>
    </>
  );
};

export default Categories;
