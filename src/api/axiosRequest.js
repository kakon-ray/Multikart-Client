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
    url: "http://localhost:5000/products",
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
    url: "http://localhost:5000/checkout",
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
    url: "http://localhost:5000/cartlist",
    data: data,
  });
  return postValue;
};
const DeleteToCartList = async (id) => {
  const postValue = await axios({
    url: `http://localhost:5000/cartlist?id=${id}`,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const UpdateTOCheckBoxUpdate = async (value, id) => {
  const url = `http://localhost:5000/cartlist?id=${(id, value)}`;

  axios
    .patch(
      url,
      {},
      {
        params: {
          id,
          value,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return fail(error);
    });
};

const UpdateToAllCheckBox = async (value) => {
  const url = `http://localhost:5000/cartlist?id=${value}`;

  axios
    .put(
      url,
      {},
      {
        params: {
          value,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return fail(error);
    });
};
const AddToWishList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:5000/wishlist",
    data: data,
  });
  return postValue;
};
const DeleteToWishList = async (id) => {
  const postValue = await axios({
    url: `http://localhost:5000/wishlist/` + id,

    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const AddToCompareList = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:5000/comparelist",
    data: data,
  });
  return postValue;
};
const DeleteToCompareList = async (id) => {
  const postValue = await axios({
    url: "http://localhost:5000/comparelist/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
    date: {},
  });
  return postValue;
};
const AddToCheckOut = async (data) => {
  const postValue = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    url: "http://localhost:5000/checkout",
    data: data,
  });
  return postValue;
};
const DeleteTOCheckOut = async (id) => {
  const postValue = await axios({
    url: "http://localhost:5000/checkout/" + id,
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });

  return postValue;
};

export {
  GetProducts,
  GetCheckOutData,
  AddToCartList,
  UpdateTOCheckBoxUpdate,
  UpdateToAllCheckBox,
  AddToWishList,
  AddToCompareList,
  AddToCheckOut,
  DeleteToCartList,
  DeleteToCompareList,
  DeleteToWishList,
  DeleteTOCheckOut,
};
