import axios from "axios";

const marketPlaceApi = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const getCategories = () => {
  return marketPlaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getItems = (category) => {
  let query = "/items"
  if (category !== "All") {
    query += `?category_name=${category}`
  } 
  return marketPlaceApi.get(query).then((res) => {
    return res.data.items;
  });
};

export const getUsers = () => {
  return marketPlaceApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const getSingleUser = (username) => {
  return marketPlaceApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};


