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
}) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={img} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-center text-xl font-medium mb-2">
              {name}
            </h5>
            <h5 class="text-gray-900 text-center text-xl font-medium mb-2">
              $ {price}
            </h5>
            <h5 class="text-gray-900 font-bold text-center text-x  mb-2">
              Supplier: {supplierName}
            </h5>
            <p class="text-gray-700 text-center mb-4">{text}</p>
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
