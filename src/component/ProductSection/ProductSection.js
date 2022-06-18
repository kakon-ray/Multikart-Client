import React, { useEffect } from "react";
import Product from "../Product/Product";
import product from "../../assets/img/product1.jpg";
import product1 from "../../assets/img/product2.jpg";
import product2 from "../../assets/img/product4.jpg";
import product3 from "../../assets/img/product1.jpg";
import { GetApiAction } from "../../redux/action/Action";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";

const ProductSection = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Reducer.products);

  if (!product) {
    return <Loading />;
  }

  return (
    <section className="pb-24">
      <div class="pb-12 text-gray-800 text-center mx-12 pt-12">
        <h2 class="text-3xl font-bold mb-12">
          TOP <span class="text-orange-600">COLLECTION</span>
        </h2>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-4 ">
          {product?.map((item) => {
            return <Product img={product} item={item} />;
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          class="inline-block mx-auto px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          GO TO SHOP PAGE
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
