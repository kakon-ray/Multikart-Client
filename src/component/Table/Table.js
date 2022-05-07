import React from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading/Loading";

const Table = ({ products,deleteItem,deleteManageInventory }) => {
  if (products.length == 0) {
    return <Loading />;
  }

  return (
    <div>
      <table className="min-w-full border text-center">
        <thead className="border-b">
          <tr>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Image
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Name
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Price
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              Supplier
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4 border-r"
            >
              ID
            </th>
            <th
              scope="col"
              className="text-x font-bold text-purple-900 uppercase px-6 py-4"
            >
              Manage Item
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr className="border-b" key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "40px", height: "50px" }}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-slate-200 border-r">
                  {item.name}
                </td>

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
                  {item.quantity}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
                  {item.price}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
                  {item.supplierName}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-slate-200 border-r">
                  {item._id}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                  {deleteManageInventory ? (
                  
                      <button
                        onClick={()=>deleteManageInventory(item._id)}
                        type="button"
                        className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        Delete Inventory
                      </button>
                  
                  ) : (
                    <button
                      type="button"
                      onClick={() => deleteItem(item._id)}
                      className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                      Delete Item
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
