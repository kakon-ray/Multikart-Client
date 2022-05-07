import React, { useEffect, useState } from "react";
import Delivery from "../../Section/Service/Service";
import MetOurTem from "../../Section/MetOurTem/MetOurTem";
import Slider from "../../Slider/Slider";
import useProducts from "../../../Hook/useProducts";
import Product from "../../Product/Product";
import Button from "../../Button";
import Loading from "../../Loading/Loading";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
import StartProject from "../../StartProject/StartProject";
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

      <div className="container mx-auto px-4 md:px-20 py-8 pt-12">
        <h1 className="text-3xl text-stone-900 font-bold uppercase text-center mx-auto mb-12 dark:text-slate-200">
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5">
            {products?.map((item) => {
              return (
                <React.Fragment key={item._id}>
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
                </React.Fragment>
              );
            })}
          </div>
        )}

        <LightSpeed>
          <div className="flex justify-center mt-12">
            <Link to="/allinventory">
              <button
                type="button"
                className="inline-block  bg-purple-600 font-bold text-center mr-2 px-10 py-3 skew-x-12  text-gray-300 font-medium text-xs leading-tight  hover:bg-red-600 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                See all Inventory
              </button>
            </Link>
          </div>
        </LightSpeed>
      </div>
      <Delivery></Delivery>
      <div
        className="grid md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3  gap-4 h-100 my-36"
        style={{
          backgroundImage:
            "url(" + "https://i.ibb.co/Rjn9grS/bg-image-1.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div></div>

        <div className="col-span-2 py-12 bg-lime-600 text-gray-300 bg-opacity-80 px-12 skew-y-12">
          <Fade right>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-8 my-5">
              <div>
                <h1 className="text-xl">Fast Delivery</h1>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                </p>
              </div>
              <div>
                <h1 className="text-xl">Secure Packaging</h1>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                </p>
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-8 my-8">
              <div>
                <h1 className="text-xl">Fast Delivery</h1>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                </p>
              </div>
              <div>
                <h1 className="text-xl">Secure Packaging</h1>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <MetOurTem></MetOurTem>
      <StartProject />
    </div>
  );
};

export default Home;
