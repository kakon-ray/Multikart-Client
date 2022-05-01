import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useProducts from "../../Hook/useProducts";
import Button from "../Button";
import PageBanner from "../PageBanner/PageBanner";

const Update = () => {
  const [products, setProducts] = useProducts();
  const { id } = useParams();

  const updateProduct = products.filter((item) => item._id === id);

  console.log(updateProduct);

  const navigate = useNavigate();

  const navigaton = () => {
    navigate("/");
  };

  return (
    <div>
      <PageBanner page="Update Inventory Item"></PageBanner>

      <div class="flex justify-center my-5 mt-12">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={updateProduct[0]?.img}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-center text-xl font-medium mb-2">
              {updateProduct[0]?.name}
            </h5>
            <h5 class="text-gray-900 text-center text-sm font-medium mb-2">
              Price: {updateProduct[0]?.price}$
            </h5>
            <h5 class="text-gray-900 text-center text-sm font-medium mb-2">
              Total Quantity: {updateProduct[0]?.quantity}
            </h5>
            <h5 class="text-gray-900 font-bold text-center text-x  mb-2">
              Supplier: {updateProduct[0]?.supplierName}
            </h5>
            <p class="text-gray-700 text-base mb-4">{updateProduct[0]?.text}</p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
            <div className="flex justify-center mt-12">
              <Button>Add Quantity</Button>
              <Button>Remove Quantity</Button>
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
