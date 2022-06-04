import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartListTableRow from "./CartListTableRow";
import { getApiCartListAction } from "../../redux/action/Action";
const CartList = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.Reducer.cartitem);
  const postSuccess = useSelector((state) => state.Reducer.postSuccess);

  useEffect(() => {
    dispatch(getApiCartListAction());
  }, [dispatch, postSuccess]);

  return (
    <div>
      <div className="dark:bg-black">
        <div className="container mx-auto px-4 md:px-20 pt-3">
          <h1 className="text-2xl text-orange-600 font-bold text-center uppercase mb-5">
            Cart List
          </h1>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full border text-center">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Abailable
                        </th>
                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4 border-r"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="text-x font-bold text-orange-900 uppercase px-6 py-4"
                        >
                          Remove Cart List
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem?.map((item) => {
                        return (
                          <CartListTableRow item={item}></CartListTableRow>
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
