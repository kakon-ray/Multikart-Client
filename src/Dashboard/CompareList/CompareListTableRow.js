import React from "react";
import { useDispatch } from "react-redux";
import { DeleteToCompareListApiAction } from "../../redux/action/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const CompareListTableRow = ({ item }) => {
  const dispatch = useDispatch();
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
        {item.productname}
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        {item.abailable}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        {item.newprice}
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
        <button
          onClick={DeleteToCompareListById}
          type="button"
          className="inline-block font-bold text-center  mr-2 px-4 py-2 rounded border border-gray-500 text-orange-500 font-medium text-xs leading-tight bg-orange-600 hover:bg-red-600 text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <FontAwesomeIcon icon={faTrash} className="text-lg " />
        </button>
      </td>
    </tr>
  );
};

export default CompareListTableRow;
