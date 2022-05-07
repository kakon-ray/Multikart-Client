import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Loading from "../Loading/Loading";

const Product = ({
  name,
  price,
  text,
  img,
  btnText,
  btnLink,
  supplierName,
  id,
  quantity,
}) => {
  return (
    <>
      <div className="flex justify-center relative ">
        <div className="rounded-lg shadow-lg bg-white ">
          <span data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg " src={img} alt="" />
          </span>
          <div className="p-6 absolute left-0 right-0 top-0 bottom-0 bg-stone-900 bg-opacity-70 ">
            <h5 className="text-center text-amber-100 text-xl font-medium mb-2 lg:mt-16 sm:mt-4 skew-x-12">
              {name}
            </h5>
            <h5 className="text-center text-gray-300 font-bold text-x  mb-2 skew-x-12">
              Total Quantity: {quantity}
            </h5>
            <h5 className="text-center text-gray-300 text-sm font-medium mb-2 skew-x-12">
              Price: {price}$
            </h5>
            <h5 className="text-center text-gray-300 text-sm font-medium mb-2 skew-x-12">
              {supplierName}
            </h5>

            <h5 className="text-center text-gray-300 text-sm font-medium mb-2 skew-x-12">
              {id}
            </h5>
            <p className="text-gray-300 text-center mb-4 skew-x-12">
              {text.split("").slice(21, 60)}...
            </p>
            <div className="flex justify-center">
              <Link to={`/inventory/${id}`}>
                <button
                  type="button"
                  className="inline-block skew-x-12 font-bold text-center  mr-2 px-6 py-2 border-2 border-white-500 text-white font-medium text-xs leading-tight hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Update Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
