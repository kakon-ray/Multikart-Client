import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartListTableRow from "./CartListTableRow";
import { getApiCheckOutAction } from "../../redux/action/Action";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
import axios from "axios";
import useCartList from "../../Hook/useCartList";

const CartList = () => {
  const dispatch = useDispatch();

  const [user, loading, error] = useAuthState(auth);
  const [cartItem, setCart] = useCartList();

  // get checkout value
  const checkOutValue = useSelector((state) => state.Reducer.checkOutValue);
  const addCheckOutRes = useSelector(
    (state) => state.Reducer.addCheckOutResponce
  );
  const deleteCheckOutRes = useSelector(
    (state) => state.Reducer.deleteCheckOutResponce
  );
  useEffect(() => {
    dispatch(getApiCheckOutAction());
  }, [dispatch, addCheckOutRes, deleteCheckOutRes]);

  return (
    <div>
      <div className="dark:bg-black">
        <div className="container mx-auto px-8 pt-3 ">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mb-5">
            Cart List
          </h1>

          <div className="flex flex-col">
            <div className=" sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                <div
                  className="overflow-hidden overflow-scroll"
                  style={{ height: "500px" }}
                >
                  <table className="min-w-full border text-center table-auto ">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r flex justify-center"
                        >
                          <div class="flex space-between mx-auto items-center">
                            <input
                              class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 pt-0 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label inline-block text-orange-900 ml-2"
                              for="flexCheckDefault"
                            >
                              Select All
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Abailable
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Quantity
                        </th>

                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4"
                        >
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem?.map((item) => {
                        return (
                          <CartListTableRow
                            item={item}
                            checkOutValue={checkOutValue}
                          ></CartListTableRow>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
