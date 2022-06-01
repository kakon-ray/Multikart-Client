import React from "react";
import img1 from "../../assets/img/slider1.jpg";
import img2 from "../../assets/img/slider2.jpg";
import img3 from "../../assets/img/slider3.jpg";
import Zoom from "react-reveal/Zoom";
const Slider = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <div class="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url(${img1})`,
                height: "700px",
              }}
            >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div class="flex justify-center items-center h-full">
                  <div class="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                      WHOMEN FASHON
                      <br />
                    </h2>
                    <button
                      type="button"
                      class="inline-block px-8 py-4 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active relative float-left w-full">
          <div class="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url(${img1})`,
                height: "700px",
              }}
            >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div class="flex justify-center items-center h-full">
                  <div class="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                      FORMAL FASHON
                    </h2>
                    <button
                      type="button"
                      class="inline-block px-8 py-4 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active relative float-left w-full">
          <div class="mb-32 text-gray-800 text-center lg:text-left background-radial-gradient">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url(${img3})`,
                height: "700px",
              }}
            >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div class="flex justify-center items-center h-full">
                  <div class="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                      MEN FASHON
                    </h2>
                    <button
                      type="button"
                      class="inline-block px-8 py-4 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
