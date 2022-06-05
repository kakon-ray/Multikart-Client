import React from "react";
import {
  GET_PRODUCTS,
  ADD_CARTLIST,
  GET_CARTLIST,
  ADD_WISHLIST,
  GET_WISHLIST,
  ADD_COMPARELIST,
  GET_COMPARELIST,
  DELTE_CARTLIST,
  DELTE_COMPARELIST,
} from "../type";
import {
  GetProducts,
  AddToCartList,
  GetCartList,
  GetWishList,
  AddToWishList,
  AddToCompareList,
  GetComareList,
  DeleteToCartList,
  DeleteToCompareList,
} from "../../api/axiosRequest";

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
const getApiWishListAction = () => {
  return function (dispatch) {
    return GetWishList().then((res) => {
      dispatch({
        type: GET_WISHLIST,
        payload: res.data,
      });
    });
  };
};
const getApiCompareListAction = () => {
  return function (dispatch) {
    return GetComareList().then((res) => {
      dispatch({
        type: GET_COMPARELIST,
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
  return function (dispatch) {
    dispatch({
      type: ADD_WISHLIST,
      payload: false,
    });
    return AddToWishList(request).then((res) => {
      dispatch({
        type: ADD_WISHLIST,
        payload: true,
      });
    });
  };
};
const AddToCompareListApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: ADD_COMPARELIST,
      payload: false,
    });
    return AddToCompareList(request).then((res) => {
      dispatch({
        type: ADD_COMPARELIST,
        payload: true,
      });
    });
  };
};

const DeleteToCartListApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELTE_CARTLIST,
      payload: false,
    });

    return DeleteToCartList(id).then((res) => {
      console.log(res);
      dispatch({
        type: DELTE_CARTLIST,
        payload: true,
      });
    });
  };
};
const DeleteToCompareListApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELTE_COMPARELIST,
      payload: false,
    });

    return DeleteToCompareList(id).then((res) => {
      console.log(res);
      dispatch({
        type: DELTE_COMPARELIST,
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
  getApiWishListAction,
  AddToCompareListApiAction,
  getApiCompareListAction,
  DeleteToCartListApiAction,
  DeleteToCompareListApiAction,
};
