import res from "express/lib/response";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useProducts from "../../Hook/useProducts";
import Button from "../Button";
import PageBanner from "../PageBanner/PageBanner";

const Update = () => {
  const [updateProduct, setUpdateProduct] = useState({});
  const [products, setProducts] = useProducts();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://logika-warehouse.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateProduct(data));
  }, []);

  const navigate = useNavigate();

  const navigaton = () => {
    navigate("/");
  };

  //   const deliverd = () => {
  //     products.map((item) => {
  //       const newquantity = item.quantity - 1;
  //       if (item._id === id) {
  //         setProducts([...products, { ...item, quantity: newquantity }]);
  //         updateProduct.quantity = newquantity;
  //       }
  //     });
  //   };

  //    const onsubmitAdd = (e) => {
  //      e.preventDefault();
  //      const value = e.target.addquantity.value;

  //      products.map((item) => {
  //        const newquantity =
  //          item.quantity + parseInt(value) ? parseInt(value) : item.quantity;
  //        if (item._id === id) {
  //          setProducts([...products, { ...item, quantity: newquantity }]);
  //          updateProduct.quantity = newquantity;
  //        }
  //      });
  //    };

  //   remove one quantity
  const deliverd = () => {
    const newquantity = updateProduct.quantity - 1;
    setUpdateProduct({ ...updateProduct, quantity: newquantity });

    // const update = { quantity: newquantity };
    // fetch(`https://logika-warehouse.herokuapp.com/product/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(update),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     alert("Quantity add successfully");
    //   });
  };

  //   add quantity to input filed
  const onsubmitAdd = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.addquantity.value);
    const updateQuantity = parseInt(updateProduct.quantity);
    const newquantity = value ? value + updateQuantity : updateQuantity;
    setUpdateProduct({ ...updateProduct, quantity: newquantity });
    e.target.addquantity.value = "";
  };

  return (
    <div>
      <PageBanner page="Update Inventory Item"></PageBanner>

      <div className="flex justify-center my-5 mt-12">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={updateProduct?.img}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900  text-xl font-medium mb-2">
              {updateProduct?.name}
            </h5>
            <h5 className="text-gray-900  text-sm font-medium mb-2">
              Price: {updateProduct?.price}$
            </h5>
            <h5 className="text-gray-900 text-sm font-medium mb-2">
              Supplier: {updateProduct?.supplierName}
            </h5>
            <h5 className="text-gray-900 font-bold  text-x  mb-2">
              Total Quantity: {updateProduct?.quantity}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {updateProduct?.text}
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            <div className="flex  mt-12">
              <button
                onClick={deliverd}
                type="button"
                className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Deliverd
              </button>
              <form className="flex" onSubmit={onsubmitAdd}>
                <input
                  type="addquantity"
                  name="addquantity"
                  className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                        
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
                        "
                  id="exampleTel0"
                  placeholder="Add quantity"
                />
                <button
                  type="submit"
                  className="inline-block font-bold text-center  mr-2 px-6 py-2 border border-gray-500 text-purple-500 font-medium text-xs leading-tight  hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-12 items-center">
        <ion-icon name="play-back-outline"></ion-icon>
        <span
          onClick={navigaton}
          className="cursor-pointer text-x text-purple-600 ml-1 hover:text-purple-800 "
        >
          Back To Home
        </span>
      </div>
    </div>
  );
};

export default Update;
