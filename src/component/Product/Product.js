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
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <span data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={img} alt="" />
          </span>
          <div className="p-6">
            <h5 className="text-center text-gray-900 text-xl font-medium mb-2">
              {name}
            </h5>
            <h5 className="text-center text-gray-900 font-bold text-x  mb-2">
              Total Quantity: {quantity}
            </h5>
            <h5 className="text-center text-gray-900 text-sm font-medium mb-2">
              Price: {price}$
            </h5>
            <h5 className="text-center text-gray-900 text-sm font-medium mb-2">
              Supplier: {supplierName}
            </h5>

            <h5 className="text-center text-gray-900 text-sm font-medium mb-2">
              Product Id:{id}
            </h5>
            <p className="text-gray-700 text-center mb-4">
              {text.split("").slice(0, 10)}...
            </p>
            <div className="flex justify-center">
              <Link to={`/manageitems/${id}`}>
                <Button>{btnText ? btnText : "Update Now"}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
