import React from "react";

const Product = ({ img }) => {
  return (
    <>
      <div class="mb-6 lg:mb-0">
        <div class="bg-white block rounded-lg shadow-lg">
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <img
              src={img}
              class="w-full rounded-t-lg"
              style={{ height: "300px" }}
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
            </a>
            <svg
              class="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ left: "0", bottom: "0" }}
            >
              <path
                fill="#fff"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="p-6">
            <div class="flex justify-between">
              <p class="text-lg">
                <a href="#!" class="text-gray-500">
                  Laptops
                </a>
              </p>
              <p class="text-lg text-red-600">
                <s>$1099</s>
              </p>
            </div>
            <div class="flex justify-between py-2">
              <h1 class="mb-0">HP Notebook</h1>
              <h1 class="text-gray-500 mb-0">$999</h1>
            </div>
            <div class="flex justify-between mb-2">
              <p class="text-gray-500 mb-0">
                Available: <span class="font-bold">6</span>
              </p>
              <div class="ml-auto text-yellow-600">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
