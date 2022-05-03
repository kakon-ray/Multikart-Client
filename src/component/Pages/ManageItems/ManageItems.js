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

const ManageItems = () => {
  const [addValue, setAddValue] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const [products, setProducts] = useProducts();
  const [user, loading, error] = useAuthState(auth);

  // const deleteItem = (id) => {
  //   const proceed = window.confirm("Are you delete this item");

  //   if (proceed) {
  //     async function fetchFunction() {
  //       try {
  //         const response = await fetch(
  //           `https://still-gorge-24214.herokuapp.com/product/${id}`,
  //           {
  //             method: "DELETE",
  //           }
  //         );
  //         const json = await response.json();
  //         if (json.deletedCount > 0) {
  //           const newData = products.filter((item) => item._id !== id);
  //           setProducts(newData);
  //         }
  //       } catch (err) {
  //         throw err;
  //         console.log(err);
  //       }
  //     }
  //     fetchFunction();

  //     // const url = `https://still-gorge-24214.herokuapp.com/product/${id}`;
  //     // fetch(url, {
  //     //   method: "DELETE",
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     console.log(data);
  //     //     if (data.deletedCount > 0) {
  //     //       const newData = products.filter((item) => item._id != id);
  //     //       setProducts(newData);
  //     //     }
  //     //   });
  //   }
  // };

  const addItem = (id) => {
    fetch(`https://still-gorge-24214.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        async function fetchFunction() {
          try {
            const addItemValue = {
              email: user.email,
              name: data.name,
              quantity: data.quantity,
              price: data.price,
              supplierName: data.supplierName,
              img: data.img,
            };

            // console.log(addItemValue);

            const response = await fetch(
              `https://still-gorge-24214.herokuapp.com/userproduct`,
              {
                // mode: "no-cors",
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addItemValue),
              }
            );

            toast.success("Item Add Successfully");
          } catch (err) {
            throw err;
            console.log(err);
          }
        }
        fetchFunction();
      });
  };

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>

      <div className="container mx-auto px-4 md:px-20 my-30 my-24">
        <h1 className="text-xl text-purple-600 font-bold text-center uppercase mb-5">
          Manage Inventory
        </h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Table products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
