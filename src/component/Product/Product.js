import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import {
  AddToCartApiAction,
  AddToWishApiAction,
  AddToCompareListApiAction,
} from "../../redux/action/Action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const productname = item.productname;
  const oldprice = item.oldprice;
  const newprice = item.newprice;
  const abailable = item.abailable;
  const rating = item.rating;
  const img = item.img;

  const product = {
    productname,
    oldprice,
    newprice,
    abailable,
    rating,
    img,
  };

  const addToCart = () => {
    dispatch(AddToCartApiAction(product));
  };
  const addToWishlist = () => {
    dispatch(AddToWishApiAction(product));
  };
  const addToCompareList = () => {
    dispatch(AddToCompareListApiAction(product));
  };
  return (
    <>
      <div class="mb-6 lg:mb-0 relative card">
        <div class="bg-white border block rounded-lg shadow-lg">
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <div className="absolute left-2 top-2 new">
              <span class="text-xs inline-block  py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded-full">
                New
              </span>
            </div>

            <div>
              <img
                src="https://multikart-react.vercel.app/assets/images/pro3/2.jpg"
                class="w-full main-image"
                style={{ height: "300px" }}
              />
              <img
                src="https://multikart-react.vercel.app/assets/images/pro3/4.jpg"
                class="w-full hover-image"
                style={{ height: "300px" }}
              />
            </div>

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
          <div className="p-6 pb-2">
            <div class="flex justify-between">
              <p class="text-gray-500 mb-0">
                Available: <span class="font-bold">{item?.abailable}</span>
              </p>
              <p class="text-lg text-red-600">
                <s>{item?.oldprice}</s>
              </p>
            </div>
            <div class="flex justify-between py-2">
              <h2 class="mb-0 text-xl">{item?.productname}</h2>
              <h2 class="text-gray-500 mb-0 text-xl">{item?.newprice}</h2>
            </div>
            <div class="flex justify-between items-center mb-2 icon-section">
              <div className="absolute top-5 right-5 z-1">
                <button
                  onClick={addToCart}
                  className="bg-orange-600 m-2 text-white flex justify-center p-1 rounded hover:bg-orange-700 transition"
                >
                  <CartIcon />
                </button>
                <button
                  onClick={addToWishlist}
                  className="bg-orange-600 m-2 text-white flex justify-center p-1 rounded hover:bg-orange-700 transition"
                >
                  <ion-icon
                    name="heart-outline"
                    style={{ fontSize: "16px", fontWeight: "900" }}
                  ></ion-icon>
                </button>
                <button
                  onClick={addToCompareList}
                  className="bg-orange-600 m-2 text-white flex justify-center p-1 rounded hover:bg-orange-700 transition"
                >
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="text-white"
                  />
                </button>
              </div>
              <div class="ml-auto text-yellow-600">
                <ul class="flex justify-center ">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      class="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      class="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            className="bg-orange-600 rounded-b-lg text-white text-sm hover:bg-orange-700 active:bg-orange-700 px-3 py-2 w-full transition"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
