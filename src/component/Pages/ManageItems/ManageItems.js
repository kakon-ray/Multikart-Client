import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";
import axios from "axios";

import Table from "../../Table/Table";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./ManageItems.css";

const ManageItems = () => {
  const [addValue, setAddValue] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [products, setProducts] = useProducts();
  const [user, loading, error] = useAuthState(auth);

  const deleteManageInventory = (id) => {
    Swal.fire({
      title: "<strong>Are you Sure?</strong>",
      icon: "warning",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Delete",
      cancelButtonText: "No",
      cancelButtonAriaLabel: "Thumbs down",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        async function fetchFunction() {
          try {
            const response = await fetch(
              `https://still-gorge-24214.herokuapp.com/product/${id}`,
              {
                // mode: "no-cors",
                method: "DELETE",
              }
            );
            const json = await response.json();
            if (json.deletedCount > 0) {
              const newData = products.filter((item) => item._id !== id);
              setProducts(newData);
              toast.success("Item Delete Successfully");
            }
          } catch (err) {
            throw err;
            console.log(err);
          }
        }
        fetchFunction();
      }
    });
  };

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>
      <div className=" dark:bg-black">
        <div className="container mx-auto px-4 md:px-20 py-24">
          <h1 className="text-2xl text-purple-600 font-bold text-center uppercase mb-5">
            Manage Inventory
          </h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table
                    products={products}
                    deleteManageInventory={deleteManageInventory}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebutton">
        <Link to="/add">
          <button
            type="button"
            className="inline-block font-bold text-center mr-2 px-6 py-2 border border-gray-500 text-purple-200 font-medium text-xs leading-tight  bg-purple-600 hover:bg-red-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Addnewitem
          </button>
        </Link>
      </div>
    </>
  );
};

export default ManageItems;
