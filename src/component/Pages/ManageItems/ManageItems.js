import React from "react";
import useProducts from "../../../Hook/useProducts";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Product from "../../Product/Product";

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  return (
    <>
      <PageBanner page="Manage Your Inventory"></PageBanner>
      <div className="container mx-auto px-4 md:px-20 my-30 my-24">
        <h1 className="text-3xl text-purple-600 font-bold uppercase text-center mx-auto mb-12">
          Stock Products
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {products?.map((item) => {
            return (
              <Product
                name={item.name}
                img={item.img}
                text={item.text}
                btnText="Delete Item"
                btnLink=""
              ></Product>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ManageItems;
