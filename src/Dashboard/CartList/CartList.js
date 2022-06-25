import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartListTableRow from "./CartListTableRow";
import {
  UpdateToALLCartApiAction,
  UpdateToCartApiAction,
} from "../../redux/action/Action";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../component/Loading/Loading";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
const CartList = () => {
  const dispatch = useDispatch();
  const [allCheckBox, setAllCheckBox] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  const [cartItem, setCart] = useContext(CartContext);
  let checkBox = cartItem.filter((item) => item.check == "true");

  useEffect(() => {
    if (cartItem.length > 0) {
      if (checkBox.length != cartItem.length) {
        setAllCheckBox(false);
      } else {
        setAllCheckBox(true);
      }
    }
    return;
  }, [cartItem]);

  const passData = (value, id) => {
    dispatch(UpdateToCartApiAction(id, value));
  };

  const handleALlCheckBox = () => {
    setAllCheckBox(!allCheckBox);
    dispatch(UpdateToALLCartApiAction(!allCheckBox));
  };

  return (
    <div>
      <div className="dark:bg-black">
        <div className="container mx-auto px-8 pt-3 ">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mb-5">
            Cart List
          </h1>

          <div className="flex flex-col">
            <div className="overflow-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-scroll" style={{ height: "500px" }}>
                  <table className="min-w-full border text-center">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r flex justify-center"
                        >
                          <div class="flex space-between mx-auto items-center">
                            <input
                              class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 pt-0 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                              checked={allCheckBox}
                              type="checkbox"
                              onChange={handleALlCheckBox}
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
                            passData={passData}
                          ></CartListTableRow>
                        );
                      })}
                    </tbody>
                  </table>
                  <div>{cartItem.length <= 0 ? <Loading /> : ""}</div>
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
