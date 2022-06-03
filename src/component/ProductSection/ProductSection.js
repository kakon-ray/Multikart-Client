import React from "react";
import Product from "../Product/Product";
import product from "../../assets/img/product1.jpg";
import product1 from "../../assets/img/product2.jpg";
import product2 from "../../assets/img/product4.jpg";
import product3 from "../../assets/img/product1.jpg";

const ProductSection = () => {
  return (
    <div>
      <section class="mb-12 text-gray-800 text-center mx-12 pt-12">
        <h2 class="text-3xl font-bold mb-12">
          Our Abiable <u class="text-orange-600">Products</u>
        </h2>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-4 ">
          <Product img={product} />
          <Product img={product1} />
          <Product img={product2} />
          <Product img={product3} />
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
