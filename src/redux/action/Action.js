import React from "react";
import { GET_PRODUCTS, POST_PRODUCTS, CART_LIST } from "../type";
import {
  GetProducts,
  AddToCartList,
  GetCartList,
} from "../../api/axiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetProducts().then((res) => {
      console.log(res);
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    });
  };
};

const getApiCartListAction = () => {
  return function (dispatch) {
    return GetCartList().then((res) => {
      dispatch({
        type: CART_LIST,
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

export { GetApiAction, AddToCartApiAction, getApiCartListAction };
