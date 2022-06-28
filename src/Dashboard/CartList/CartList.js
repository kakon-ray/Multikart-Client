import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartListTableRow from "./CartListTableRow";
import {
  UpdateToALLCartApiAction,
  UpdateToCartApiAction,
  UpdateToQuantityApiAction,
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

  const checkOutPement = cartItem.filter((item) => item.check == "true");

  const handleInputNumber = (e, item) => {
    let quantity = parseInt(e.target.value);
    dispatch(UpdateToQuantityApiAction(item._id, quantity));
  };

  let checkOutPementSum = 0;

  for (let item of checkOutPement) {
    const price = parseFloat(item.totalPrice);
    checkOutPementSum = checkOutPementSum + price;
  }

  return (
    <div>
      <div className="dark:bg-black">
        <div className="container mx-auto px-8 pt-3">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mt-3">
            Cart List
          </h1>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div
                  className="overflow-hidden overflow-y-scroll"
                  style={{ height: "400px" }}
                >
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
                          Price
                        </th>

                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-2 py-4 border-r"
                        >
                          Total Price
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
                          <React.Fragment key={item._id}>
                            <CartListTableRow
                              item={item}
                              passData={passData}
                              handleInputNumber={handleInputNumber}
                            ></CartListTableRow>
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                  <div>{cartItem.length <= 0 ? <Loading /> : ""}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <div className="w-48 pt-2">
              <div className="flex justify-between text-white dark:text-white">
                <h1 className="text-lg text-orange-600">Total price: </h1>
                <h1>{checkOutPementSum}$</h1>
              </div>
              <div className="py-3">
                <button
                  type="button"
                  class="inline-block mx-auto px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
