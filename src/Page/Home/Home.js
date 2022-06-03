import React, { useEffect, useState } from "react";
import Slider from "../../component/Slider/Slider";
import SpecialProduct from "../../component/SpecialProduct/SpecialProduct";
import TopProduct from "../../component/TopProduct/TopProduct";
import background from "../../assets/img/slider3.jpg";
import ProductSection from "../../component/ProductSection/ProductSection";
const myStyle = {
  backgroundImage: `url(${background})`,
  height: "100vh",
  marginTop: "-70px",
  fontSize: "50px",
  backgroundSize: "cover",

  backgroundRepeat: "no-repeat",
};

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
      <TopProduct />
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2" style={myStyle}>
          <div className="my-auto mx-auto">
            <h1 className="text-8xl font-bold text-orange-600">2021</h1>
            <h2 className="text-6xl font-bold">FASHION TRENDS</h2>
            <p className="text-gray-500">SPECIAL OFFER</p>
          </div>
        </div>
      </section>
      <SpecialProduct />
    </div>
  );
};

export default Home;
