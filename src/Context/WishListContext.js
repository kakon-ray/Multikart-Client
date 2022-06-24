import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase.init";

export const WishListContext = createContext();

export const WishListProvider = (props) => {
  const [wishItem, setWishList] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
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
      });

      setWishList(getcartValue.data);
    };

    getCart();
  }, [user, wishItem, postSuccess, deleteWishListRes]);

  return (
    <WishListContext.Provider value={[wishItem, setWishList]}>
      {props.children}
    </WishListContext.Provider>
  );
};
