import React from "react";
import img1 from "../../assets/img/slider1.jpg";
import img2 from "../../assets/img/slider2.jpg";
import img3 from "../../assets/img/slider3.jpg";
import pagebanner from "../../assets/img/homepagebannerimg.png";
import Zoom from "react-reveal/Zoom";
const Slider = () => {
  return (
    <section>
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img
                src={img3}
                class="block w-full"
                alt="Wild Landscape"
                style={{ height: "550px" }}
              />
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                      WHOMEN FASHON
                      <br />
                    </h2>
                    <button
                      type="button"
                      className="inline-block px-8 py-4 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src={img2}
                class="block w-full"
                alt="Camera"
                style={{ height: "550px" }}
              />
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                      WHOMEN FASHON
                      <br />
                    </h2>
                    <button
                      type="button"
                      className="inline-block px-8 py-4 bg-orange-600 text-white font-medium text-sm leading-tight uppercase  shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
