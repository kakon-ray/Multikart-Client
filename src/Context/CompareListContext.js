import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase.init";
export const CompareListContext = createContext();

export const CompareListProvider = (props) => {
  const [compareList, setCompareList] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const email = user?.email;
  const postSuccess = useSelector(
    (state) => state.Reducer.addCompareListResponce
  );
  const deleteCompareListRes = useSelector(
    (state) => state.Reducer.deleteCompareListResponce
  );

  useEffect(() => {
    const getCart = async () => {
      const getcartValue = await axios({
        url: ` https://fast-shore-34376.herokuapp.com/comparelist?email=${email}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        data: {},
      });

      setCompareList(getcartValue.data);
    };

    getCart();
  }, [user, postSuccess, deleteCompareListRes]);

  return (
    <CompareListContext.Provider value={[compareList, setCompareList]}>
      {props.children}
    </CompareListContext.Provider>
  );
};
