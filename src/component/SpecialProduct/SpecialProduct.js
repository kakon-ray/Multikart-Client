import React, { useEffect } from "react";
import Product from "../Product/Product";
import product from "../../assets/img/product1.jpg";
import product1 from "../../assets/img/product2.jpg";
import product2 from "../../assets/img/product4.jpg";
import product3 from "../../assets/img/product1.jpg";
import { useDispatch, useSelector } from "react-redux";
import GetApiAction from "../../redux/action/Action";

const SpecialProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Reducer.products);

  useEffect(() => {
    dispatch(GetApiAction());
  }, []);
  return (
    <div>
      <section class="pb-12 text-gray-800 text-center mx-12 ">
        <h2 class="text-3xl font-bold mb-12">
          SPECIAL <span class="text-orange-600"> PRODUCTS</span>
        </h2>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-4 ">
          {products?.slice(0, 4).map((item) => {
            return <Product img={product} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default SpecialProduct;
