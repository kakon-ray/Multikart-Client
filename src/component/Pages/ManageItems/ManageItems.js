import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";

const ManageItems = () => {
  // const [addValue, setAddValue] = useState({});
  const [products, setProducts] = useProducts();
  const [user, loading, error] = useAuthState(auth);

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you delete this item");

    if (proceed) {
      async function fetchFunction() {
        try {
          const response = await fetch(
            `https://still-gorge-24214.herokuapp.com/product/${id}`,
            {
              method: "DELETE",
            }
          );
          const json = await response.json();
          if (json.deletedCount > 0) {
            const newData = products.filter((item) => item._id !== id);
            setProducts(newData);
          }
        } catch (err) {
          throw err;
          console.log(err);
        }
      }
      fetchFunction();

      // const url = `https://still-gorge-24214.herokuapp.com/product/${id}`;
      // fetch(url, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     if (data.deletedCount > 0) {
      //       const newData = products.filter((item) => item._id != id);
      //       setProducts(newData);
      //     }
      //   });
    }
  };

  // const addItem = (id) => {
  //   fetch(`https://still-gorge-24214.herokuapp.com/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAddValue(data);
  //     });

  //   const addItemValue = {
  //     email: user.email,
  //     name: addValue.name,
  //     quantity: addValue.quantity,
  //     price: addValue.price,
  //     supplierName: addValue.supplierName,
  //     img: addValue.img,
  //   };

  //   fetch("https://still-gorge-24214.herokuapp.com/product", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(addItemValue),
  //   }).then((res) => {
  //     console.log(res);
  //     toast.success("Item Add Successfully");
  //   });
  // };

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>
      <div className="container mx-auto px-4 md:px-20 my-30 my-24 min-h-screen">
        <h1 className="text-xl text-purple-600 font-bold text-center uppercase mb-5">
          Total Products {products.length}
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
                            <img src={item.img} alt="" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                            {item.name}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.quantity}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item.price}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace- border-r">
                            {item.supplierName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {item._id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {/* <button
                              onClick={() => addItem(item._id)}
                              type="button"
                              className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Add Item
                            </button> */}
                            <button
                              type="button"
                              onClick={() => deleteItem(item._id)}
                              className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Delete Item
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
