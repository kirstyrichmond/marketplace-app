import React, { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <>
      <div>
        <h1>In categories</h1>
        <select>
          {categories.map((category) => {
              return <option>{category.category_name}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Categories;
