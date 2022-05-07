import React from "react";
import Button from "../../Button";
import Fade from "react-reveal/Fade";

const Delivery = () => {
  return (
    <div className="container mx-auto md:px-20 px-12 py-6">
      <Fade left>
        <h1 className="text-3xl text-purple-600 text-center font-bold mt-10">
          OUR SERVICES
        </h1>
      </Fade>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 sm:gap-16 md:gap-8 my-12 text-center ">
        <Fade left>
          <div className="hover:border hover:border-red-500 relative border p-10 rounden dark:text-slate-200">
            <h1 className="text-xl ">World Wide Transport</h1>
            <p className="text-sm  my-4 ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                style={{ bottom: "-15px", right: "-30px" }}
                className="inline-block float-left skew-x-12 absolute bg-purple-600  font-bold text-center  mr-2 px-10 py-2 border-2 border-purple-600 hover:border-red-600 text-gray-200 font-medium text-xs leading-tight  hover:bg-red-600 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Red More
              </button>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="hover:border hover:border-red-500 relative border p-10 rounden dark:text-slate-200">
            <h1 className="text-xl ">World Wide Transport</h1>
            <p className="text-sm  my-4 ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                style={{ bottom: "-15px", right: "-30px" }}
                className="inline-block float-left skew-x-12 absolute bg-purple-600  font-bold text-center  mr-2 px-10 py-2 border-2 border-purple-600 hover:border-red-600 text-gray-200 font-medium text-xs leading-tight  hover:bg-red-600 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Red More
              </button>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="hover:border hover:border-red-500 relative border p-10 rounden dark:text-slate-200">
            <h1 className="text-xl ">World Wide Transport</h1>
            <p className="text-sm  my-4 ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                style={{ bottom: "-15px", right: "-30px" }}
                className="inline-block float-left skew-x-12 absolute bg-purple-600  font-bold text-center  mr-2 px-10 py-2 border-2 border-purple-600 hover:border-red-600 text-gray-200 font-medium text-xs leading-tight  hover:bg-red-600 hover:text-gray-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Red More
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Delivery;
