import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

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
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={img} alt="" />
          </a>
          <div class="p-6">
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
            <p class="text-gray-700 text-center mb-4">
              {text.split("").slice(0, 69)}...
            </p>
            <div className="flex justify-center">
              <Link to={`${id}`}>
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
