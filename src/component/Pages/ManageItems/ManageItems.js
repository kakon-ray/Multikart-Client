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
