import React from "react";

const MyOrderRow = () => {
  return (
    <tr className="border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
        <img
          src="https://multikart-react.vercel.app/assets/images/pro3/6.jpg"
          alt=""
          style={{ width: "40px", height: "50px" }}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
        belted dress
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        12
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
        100$
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
        <button
          type="button"
          className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-orange-500 font-medium text-xs leading-tight  hover:bg-orange-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Remove Cartlist
        </button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
