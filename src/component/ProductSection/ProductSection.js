import React, { useEffect } from "react";
import Product from "../Product/Product";
import product from "../../assets/img/product1.jpg";
import product1 from "../../assets/img/product2.jpg";
import product2 from "../../assets/img/product4.jpg";
import product3 from "../../assets/img/product1.jpg";
import { GetApiAction } from "../../redux/action/Action";
import { useSelector, useDispatch } from "react-redux";

const ProductSection = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Reducer.products);

  return (
    <div>
      <section class="pb-12 text-gray-800 text-center mx-12 pt-12">
        <h2 class="text-3xl font-bold mb-12">
          TOP <span class="text-orange-600">COLLECTION</span>
        </h2>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-4 ">
          {product?.map((item) => {
            return <Product img={product} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
