import React from "react";
import useProducts from "../../../Hook/useProducts";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";

const Allinventory = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <div>
      <div className="container mx-auto px-4 md:px-20 my-30 my-24">
        <h1 className="text-3xl text-stone-900 font-bold uppercase text-center mx-auto mb-12">
          Stock Products
        </h1>
        {products?.length === 0 ? (
          <div className="flex justify-center items-center space-x-2">
            <div
              className="
                spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
                  text-purple-500
                "
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3  gap-4">
            {products?.map((item) => {
              return (
                <Zoom>
                  <Product
                    key={item._id}
                    name={item.name}
                    img={item.img}
                    text={item.text}
                    price={item.price}
                    supplierName={item.supplierName}
                    id={item._id}
                    quantity={item.quantity}
                  ></Product>
                </Zoom>
              );
            })}
          </div>
        )}

        <Fade right>
          <div className="flex justify-center mt-12">
            <Link to="/manageitems">
              <button
                type="button"
                className="inline-block  bg-black font-bold text-center mr-2 px-10 py-3 skew-x-12  text-gray-300 font-medium text-xs leading-tight  hover:bg-red-600 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Manage Inventory
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Allinventory;
