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
    url: "https://fast-shore-34376.herokuapp.com/products",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    data: {},
  });

  return getProductValue;
};

const GetCheckOutData = async () => {
  const getCheckOutValue = await axios({
    url: "https://fast-shore-34376.herokuapp.com/checkout",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return getCheckOutValue;
};

const AddToCartList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    url: "https://fast-shore-34376.herokuapp.com/cartlist",
    data: data,
  });
  return postValue;
};
const AddToWishList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "https://fast-shore-34376.herokuapp.com/wishlist",
    data: data,
  });
  return postValue;
};
const AddToCompareList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "https://fast-shore-34376.herokuapp.com/comparelist",
    data: data,
  });
  return postValue;
};
const AddToCheckOut = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "https://fast-shore-34376.herokuapp.com/checkout",
    data: data,
  });
  return postValue;
};

const DeleteToCartList = async (id) => {
  const postValue = await axios({
    url: `https://fast-shore-34376.herokuapp.com/cartlist?id=${id}`,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteToCompareList = async (id) => {
  const postValue = await axios({
    url: "https://fast-shore-34376.herokuapp.com/comparelist/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteToWishList = async (id) => {
  const postValue = await axios({
    url: `https://fast-shore-34376.herokuapp.com/wishlist/` + id,

    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const DeleteTOCheckOut = async (id) => {
  const postValue = await axios({
    url: "https://fast-shore-34376.herokuapp.com/checkout/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });

  return postValue;
};

export {
  GetProducts,
  GetCheckOutData,
  AddToCartList,
  AddToWishList,
  AddToCompareList,
  AddToCheckOut,
  DeleteToCartList,
  DeleteToCompareList,
  DeleteToWishList,
  DeleteTOCheckOut,
};
