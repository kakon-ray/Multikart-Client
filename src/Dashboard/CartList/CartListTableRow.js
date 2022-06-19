import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  DeleteToCartListApiAction,
  AddToCheckOutApiAction,
  DeleteToCheckOutApiAction,
} from "../../redux/action/Action";

const CartListTableRow = ({ item, checkOutValue }) => {
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    if (item.check) {
      setCheckBox(!checkBox);
    }
  }, [checkOutValue]);

  const deleteToCartList = () => {
    dispatch(DeleteToCartListApiAction(item._id));
  };

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
    const checkOutData = {
      id: item.id,
      newprice: item.newprice,
    };
    if (!checkBox) {
      dispatch(AddToCheckOutApiAction(checkOutData));
    }
    if (checkBox) {
      dispatch(DeleteToCheckOutApiAction(item.id));
    }
  };

  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
        <div class="flex space-between mx-auto items-center ">
          <input
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            type="checkbox"
            checked={checkBox}
            onChange={handleCheckBox}
            id="flexCheckDefault"
          />
          <label
            class="form-check-label inline-block text-orange-900 ml-2"
            for="flexCheckDefault"
          >
            Select
          </label>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
        <img
          src={item.img}
          alt=""
          style={{ width: "40px", height: "50px" }}
          className="mx-auto"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
        {item.productname}
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        {item.abailable}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        {item.newprice}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        <input
          type="number"
          class="
                  form-control
                  w-16
                  block
                  mx-auto
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
          id="exampleText0"
          defaultValue={1}
        />
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
        <button
          onClick={deleteToCartList}
          type="button"
          className="inline-block font-bold text-center  mr-2 px-4 py-2 rounded border border-gray-500 text-orange-500 font-medium text-xs leading-tight bg-orange-600 hover:bg-red-600 text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <FontAwesomeIcon icon={faTrash} className="text-lg " />
        </button>
      </td>
    </tr>
  );
};

export default CartListTableRow;
