import React from "react";
import img1 from "../../assets/img/slider1.jpg";
import img2 from "../../assets/img/slider2.jpg";
import img3 from "../../assets/img/slider3.jpg";
import "./Slider.css";
import Zoom from "react-reveal/Zoom";
const Slider = () => {
  return (
    <div id="slider">
      <div className="relative">
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <Zoom>
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={img2}
                  className="block w-full"
                  alt="..."
                  style={{ height: "610px" }}
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <div className="carousel-content">
                    <h5 className="text-5xl mb-2 w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS
                    </h5>
                    <p className="text-xl w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND LOGISTC
                      QUESTIONS CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND
                      LOGISTC QUESTIONS
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="carousel-item relative float-left w-full">
                <img
                  src={img1}
                  className="block w-full"
                  style={{ height: "610px" }}
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <div className="carousel-content">
                    <h5 className="text-5xl mb-2 w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS
                    </h5>
                    <p className="text-xl w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND LOGISTC
                      QUESTIONS CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND
                      LOGISTC QUESTIONS
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className="carousel-item relative float-left w-full">
                <img
                  src={img3}
                  className="block w-full"
                  style={{ height: "610px" }}
                  alt="..."
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                  <div className="carousel-content">
                    <h5 className="text-5xl mb-2 w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS
                    </h5>
                    <p className="text-xl w-2/4 mx-auto">
                      CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND LOGISTC
                      QUESTIONS CHECK OUT OUR BEST OFFERS FOR YOUR TRANSPORT AND
                      LOGISTC QUESTIONS
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
