import React from "react";
import { GET_PRODUCTS } from "../type";
import { GetProducts } from "../../api/axiosRequest";

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

export default GetApiAction;
