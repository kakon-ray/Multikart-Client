import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetProducts = async () => {
  const getProductValue = await axios({
    url: "http://localhost:3000/product",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
    timeout: 1000,
  });

  return getProductValue;
};
const GetCartList = async () => {
  const getcartValue = await axios({
    url: "http://localhost:3000/cartlist",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
    timeout: 1000,
  });

  return getcartValue;
};
const GetWishList = async () => {
  const getcartValue = await axios({
    url: "http://localhost:3000/wishlist",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
    timeout: 1000,
  });

  return getcartValue;
};
const GetComareList = async () => {
  const getcartValue = await axios({
    url: "http://localhost:3000/comparelist",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
    timeout: 1000,
  });

  return getcartValue;
};

const AddToCartList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:3000/cartlist",
    data: data,
  });
  return postValue;
};
const AddToWishList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:3000/wishlist",
    data: data,
  });
  return postValue;
};
const AddToCompareList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:3000/comparelist",
    data: data,
  });
  return postValue;
};
const AddToCheckOut = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:3000/checkout",
    data: data,
  });
  return postValue;
};

const DeleteToCartList = async (id) => {
  const postValue = await axios({
    url: "http://localhost:3000/cartlist/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteToCompareList = async (id) => {
  const postValue = await axios({
    url: "http://localhost:3000/comparelist/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteToWishList = async (id) => {
  const postValue = await axios({
    url: "http://localhost:3000/wishlist/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteTOCheckOut = async (id) => {
  const postValue = await axios({
    url: "http://localhost:3000/checkout/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });

  return postValue;
};

export {
  GetProducts,
  GetCartList,
  GetWishList,
  AddToCartList,
  AddToWishList,
  AddToCompareList,
  AddToCheckOut,
  GetComareList,
  DeleteToCartList,
  DeleteToCompareList,
  DeleteToWishList,
  DeleteTOCheckOut,
};
