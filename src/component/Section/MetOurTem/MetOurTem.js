import React from "react";

import Slider from "react-slick";
import img1 from "../../../assets/img/team-1.jpg";
import img2 from "../../../assets/img/team-2.jpg";
import img3 from "../../../assets/img/team-3.jpg";
import "./MetOurTem.css";
import Fade from "react-reveal/Fade";
const MetOurTem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 md:px-20 pb-24">
      <div className="my-12 text-center">
        <h1 className="text-3xl mb-2 text-purple-600 font-bold">
          MEET OUR TEAM
        </h1>
        <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
      <div className="w-100">
        <Slider {...settings}>
          <div>
            <div className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2  gap-4">
              <Fade left>
                <div className="flex justify-center ">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                      className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={img1}
                      alt=""
                    />
                    <div className="p-6 flex flex-col justify-start">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">
                        Card title
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="text-gray-600 text-xs">
                        Last updated 3 mins ago
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                      className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={img2}
                      alt=""
                    />
                    <div className="p-6 flex flex-col justify-start">
                      <h5 className="text-gray-900 text-xl font-medium mb-2">
                        Card title
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="text-gray-600 text-xs">
                        Last updated 3 mins ago
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2  gap-4">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={img1}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={img2}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2  gap-4">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={img1}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={img2}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MetOurTem;
