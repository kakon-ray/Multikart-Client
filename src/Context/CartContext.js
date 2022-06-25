import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase.init";

export const CartContext = React.createContext();

export const CartContextProvider = (props) => {
  const [cartItem, setCart] = useState([]);
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  const postSuccess = useSelector((state) => state.Reducer.postSuccess);
  const deleteCartListRes = useSelector(
    (state) => state.Reducer.deleteCartListResponce
  );

  const updateAllCartListCheckBox = useSelector(
    (state) => state.Reducer.updateAllCartList
  );
  const updateCartListBox = useSelector(
    (state) => state.Reducer.updateCartListResPonce
  );

  useEffect(() => {
    const getCart = async () => {
      const getcartValue = await axios({
        url: `http://localhost:5000/cartlist?email=${email}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        data: {},
      });

      setCart(getcartValue.data);
    };

    getCart();
  }, [
    user,
    updateAllCartListCheckBox,
    updateCartListBox,
    postSuccess,
    deleteCartListRes,
  ]);

  return (
    <CartContext.Provider value={[cartItem, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
