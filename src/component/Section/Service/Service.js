import React from "react";

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
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Success
          </button>
        </div>
        <div className="hover:border hover:border-purple-500 border p-10 rounden">
          <h1 className="text-xl ">World Wide Transport</h1>
          <p className="text-sm  my-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Success
          </button>
        </div>
        <div className="hover:border hover:border-purple-500 border p-10 rounden">
          <h1 className="text-xl ">World Wide Transport</h1>
          <p className="text-sm my-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center "
          >
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
