import React from "react";
import Delivery from "../../Section/Service/Service";
import MetOurTem from "../../Section/MetOurTem/MetOurTem";
import Slider from "../../Slider/Slider";
import useProducts from "../../../Hook/useProducts";
import Product from "../../Product/Product";
import Button from "../../Button";

const Home = () => {
  const [products, setProducts] = useProducts();
  const homeProdcuts = products.slice(0, 6);
  // console.log(homeProdcuts);
  return (
    <>
      <Slider></Slider>
      <Delivery></Delivery>

      <div className="container mx-auto px-4 md:px-20 my-30 my-24">
        <h1 className="text-3xl text-purple-600 font-bold uppercase text-center mx-auto mb-12">
          Stock Products
        </h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3  gap-4">
          {homeProdcuts?.map((item) => {
            return (
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
            );
          })}
        </div>
        {/* <div className="flex justify-center mt-12">
          <Button>Update All Inventory</Button>
        </div> */}
      </div>

      <MetOurTem></MetOurTem>
    </>
  );
};

export default Home;
