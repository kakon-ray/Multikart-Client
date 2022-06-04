import React from "react";
import { GET_PRODUCTS, POST_PRODUCTS } from "../type";
import { GetProducts, AddToCartList } from "../../api/axiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetProducts().then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    });
  };
};
const AddToCartApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_PRODUCTS,
      payload: false,
    });
    return AddToCartList(request).then((res) => {
      dispatch({
        type: POST_PRODUCTS,
        payload: true,
      });
    });
  };
};

export { GetApiAction, AddToCartApiAction };
