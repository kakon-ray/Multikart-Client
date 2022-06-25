import React from "react";
import {
  GET_PRODUCTS,
  ADD_CARTLIST,
  UPDATE_CARTLIST,
  GET_CARTLIST,
  ADD_WISHLIST,
  GET_WISHLIST,
  ADD_COMPARELIST,
  GET_COMPARELIST,
  DELTE_CARTLIST,
  DELTE_COMPARELIST,
  DELTE_WISHLIST,
  DELTE_CHECKOUT,
  ADD_CHECKOUT,
  GET_CHECKOUT,
} from "../type";
import {
  GetProducts,
  AddToCartList,
  UpdateTOCheckBoxUpdate,
  GetWishList,
  AddToWishList,
  AddToCompareList,
  AddToCheckOut,
  GetComareList,
  DeleteToCartList,
  DeleteToCompareList,
  DeleteToWishList,
  DeleteTOCheckOut,
  GetCheckOutData,
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

const getApiCheckOutAction = () => {
  return function (dispatch) {
    return GetCheckOutData().then((res) => {
      console.log(res);
      dispatch({
        type: GET_CHECKOUT,
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
const UpdateToCartApiAction = (id, value) => {
  console.log(id, value);
  return function (dispatch) {
    dispatch({
      type: UPDATE_CARTLIST,
      payload: false,
    });
    return UpdateTOCheckBoxUpdate(value, id).then((res) => {
      dispatch({
        type: UPDATE_CARTLIST,
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
const AddToCheckOutApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CHECKOUT,
      payload: false,
    });
    return AddToCheckOut(request).then((res) => {
      console.log(res);
      dispatch({
        type: ADD_CHECKOUT,
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
      dispatch({
        type: DELTE_COMPARELIST,
        payload: true,
      });
    });
  };
};
const DeleteToWishListApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELTE_WISHLIST,
      payload: false,
    });

    return DeleteToWishList(id).then((res) => {
      dispatch({
        type: DELTE_WISHLIST,
        payload: true,
      });
    });
  };
};

const DeleteToCheckOutApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELTE_CHECKOUT,
      payload: false,
    });
    return DeleteTOCheckOut(id).then((res) => {
      console.log(res);
      dispatch({
        type: DELTE_CHECKOUT,
        payload: true,
      });
    });
  };
};
export {
  GetApiAction,
  AddToCartApiAction,
  UpdateToCartApiAction,
  AddToWishApiAction,
  AddToCompareListApiAction,
  DeleteToCartListApiAction,
  DeleteToCompareListApiAction,
  DeleteToWishListApiAction,
  AddToCheckOutApiAction,
  DeleteToCheckOutApiAction,
  getApiCheckOutAction,
};
