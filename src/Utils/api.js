import axios from "axios";

const marketPlaceApi = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const getCategories = async () => {
  const res = await marketPlaceApi.get("/categories");
  return res.data.categories;
};

export const getItems = async (category) => {
  let query = "/items";
  if (category !== "All") {
    query += `?category_name=${category}`;
  }
  const res = await marketPlaceApi.get(query);
  return res.data.items;
};

export const postItem = async (newItem) => {
  const { item_name, description, img_url, price, category_name } = newItem;

  try {
    const res = await marketPlaceApi.post(`/items`, {
      item_name: item_name,
      description: description,
      img_url: img_url,
      price: price,
      category_name: category_name,
    });
    return res.data.item;
  } catch (err) {
    console.log(err);
  }
};

export const getItemById = async (id) => {
  const res = await marketPlaceApi.get(`/items/${id}`);
  console.log(res.data.item, "<< get item by id");
  return res.data.item;
};

export const deleteItemById = (id) => {
  return marketPlaceApi.delete(`/items/${id}`);
};

export const getUsers = async () => {
  const res = await marketPlaceApi.get(`/users`);
  return res.data.users;
};

export const getSingleUser = async (username) => {
  const res = await marketPlaceApi.get(`/users/${username}`);
  console.log(username, "<< in api");
  return res.data.user;
};

export const addItemToBasket = async (username, basketItem) => {
  console.log(basketItem, "<< add this item to basket: api");
  console.log(username, "<< add item to this users basket: api");
  // const { item_name, description, img_url, price, category_name } = basketItem;

  try {
    const res = await marketPlaceApi.post(`/users/${username}/basket`, {
      item_id: basketItem.item_id,
      // item_name: item_name,
      // description: description,
      // img_url: img_url,
      // price: price,
      // category_name: category_name,
    });
    console.log(res.data, "<< new item added: api");
    return res.data.item;
  } catch (err) {
    console.log(err);
  }
};

export const getBasket = async (username) => {
  const res = await marketPlaceApi.get(`/users/${username}/basket`);

  console.log(res.data, "<< items in basket");
  return res.data.items;
};
