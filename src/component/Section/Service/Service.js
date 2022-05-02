import React from "react";
import Button from "../../Button";

const Delivery = () => {
  return (
    <div className="container mx-auto md:px-20 px-4 mt-24">
      <h1 className="text-3xl text-purple-600 text-center font-bold mt-10">
        OUR SERVICES
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-12 text-center ">
        <div className="hover:border hover:border-purple-500 border p-10 rounden">
          <h1 className="text-xl ">World Wide Transport</h1>
          <p className="text-sm  my-4 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="flex justify-center">
            <Button>Rede More</Button>
          </div>
        </div>
        <div className="hover:border hover:border-purple-500 border p-10 rounden">
          <h1 className="text-xl ">World Wide Transport</h1>
          <p className="text-sm  my-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="flex justify-center">
            <Button>Rede More</Button>
          </div>
        </div>
        <div className="hover:border hover:border-purple-500 border p-10 rounden">
          <h1 className="text-xl ">World Wide Transport</h1>
          <p className="text-sm my-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="flex justify-center">
            <Button>Rede More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
