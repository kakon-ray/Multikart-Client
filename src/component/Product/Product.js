import React from "react";
import Button from "../Button";

const Product = ({ title, text, img }) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src={img} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p class="text-gray-700 text-center mb-4">{text}</p>
            <div className="flex justify-center">
              <Button>Product Details</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
