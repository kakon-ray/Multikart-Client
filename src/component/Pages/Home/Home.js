import React, { useEffect, useState } from "react";
import ProductSection from "../../ProductSection/ProductSection";
import Delivery from "../../Section/Service/Service";
import Slider from "../../Slider/Slider";

const Home = () => {
  const [products, setProducts] = useState();

  // limit data load serverside
  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/homeproduct`
        );
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
    fetchFunction();
  }, []);

  return (
    <div className="dark:bg-black">
      <Slider></Slider>
      <ProductSection />
    </div>
  );
};

export default Home;
