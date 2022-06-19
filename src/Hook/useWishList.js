import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase.init";

const useWishList = () => {
  const [wishItem, setWishList] = useState([]);
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  const postSuccess = useSelector((state) => state.Reducer.addWishListResponce);
  const deleteWishListRes = useSelector(
    (state) => state.Reducer.deleteWishListResponce
  );

  useEffect(() => {
    const getCart = async () => {
      const getcartValue = await axios({
        url: `http://localhost:5000/wishlist?email=${email}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        data: {},
        timeout: 1000,
      });
      console.log(getcartValue);
      setWishList(getcartValue.data);
    };

    getCart();
  }, [user, dispatch, postSuccess, deleteWishListRes]);

  return [wishItem, setWishList];
};

export default useWishList;