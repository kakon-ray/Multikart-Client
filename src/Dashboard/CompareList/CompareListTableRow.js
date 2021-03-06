import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  AddToCartApiAction,
  DeleteToCompareListApiAction,
} from "../../redux/action/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { CartContext } from "../../Context/CartContext";

const CompareListTableRow = ({ item }) => {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  const [cartItem, setCart] = useContext(CartContext);

  const name = item.name;
  const supplierName = item.supplierName;
  const price = item.price;
  const totalPrice = price;
  const quantity = item.quantity;
  const text = item.text;
  const img2 = item.img2;
  const img = item.img;
  const email = user?.email;
  const id = item._id;

  const addValue = {
    name,
    supplierName,
    price,
    totalPrice,
    quantity,
    text,
    img2,
    img,
    email,
    id,
  };

  const addToCart = () => {
    let cartListCheck = cartItem.filter(
      (cartListItem) => cartListItem.id == item.id
    );
    if (cartListCheck.length > 0) {
      Swal.fire({
        title: "Already add cartlist",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      dispatch(AddToCartApiAction(addValue));
      Swal.fire({
        title: "Add Cartlist Successed!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const DeleteToCompareListById = () => {
    Swal.fire({
      title: "Do you delete Comparelist item?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(DeleteToCompareListApiAction(item._id));
      }
    });
  };
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
        <img src={item.img} alt="" style={{ width: "40px", height: "50px" }} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
        {item.name}
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        {item.price}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
        <button
          onClick={DeleteToCompareListById}
          type="button"
          className="inline-block font-bold text-center  mr-2 rounded  text-orange-500 font-medium text-xs leading-tight text-orange-600 hover:text-orange-700  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <FontAwesomeIcon icon={faTrash} className="text-xl " />
        </button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
        <button
          onClick={addToCart}
          type="button"
          class="inline-block px-3 py-1 bg-orange-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add To Cartlist
        </button>
      </td>
    </tr>
  );
};

export default CompareListTableRow;
