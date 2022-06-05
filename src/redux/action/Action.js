import React from "react";
import {
  GET_PRODUCTS,
  ADD_CARTLIST,
  GET_CARTLIST,
  ADD_WISHLIST,
} from "../type";
import {
  GetProducts,
  AddToCartList,
  GetCartList,
  AddToWishList,
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
        type: GET_CARTLIST,
        payload: res.data,
      });
    });
  };
};
const AddToCartApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CARTLIST,
      payload: false,
    });
    return AddToCartList(request).then((res) => {
      dispatch({
        type: ADD_CARTLIST,
        payload: true,
      });
    });
  };
};
const AddToWishApiAction = (request) => {
  console.log(request);
  return function (dispatch) {
    dispatch({
      type: ADD_WISHLIST,
      payload: false,
    });
    return AddToWishList(request).then((res) => {
      console.log(res);
      dispatch({
        type: ADD_WISHLIST,
        payload: true,
      });
    });
  };
};

export {
  GetApiAction,
  AddToCartApiAction,
  getApiCartListAction,
  AddToWishApiAction,
};
