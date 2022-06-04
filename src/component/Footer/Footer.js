import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-light-900 dark:bg-black border-t border-slate-500 text-slate-400 pb-1 pt-1 sm:text-justify">
        <div className="grid container px-4 md:px-20 mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4  gap-12 my-6">
          <div>
            <h1 className="text-2xl mb- mt-3">Logika Warehouse</h1>
            <div className="border-2 border-b-red-500 w-16 my-5 "></div>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold py-3">CONTACT US</h2>
            <div className="border-2 border-b-red-500 w-16 mb-5"></div>
            <p>Address: 78 Oxfrod Street, Beverly Hill New York, United</p>
            <p>States of America</p>
            <p>Phone: (800) 0123 4567 890</p>
            <p>Fax: (800) 0123 4567 891</p>
            <p>E-mail: email@envato.com</p>
          </div>
          <div>
            <h1 className="text-2xl mb- mt-3">Logika Warehouse</h1>
            <div className="border-2 border-b-red-500 w-16 my-5"></div>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est lorem ipsum
              dolor sit amet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold py-3">CONTACT US</h2>
            <div className="border-2 border-b-red-500 w-16 mb-5"></div>
            <p>Address: 78 Oxfrod Street, Beverly Hill New York, United</p>
            <p>States of America</p>
            <p>Phone: (800) 0123 4567 890</p>
            <p>Fax: (800) 0123 4567 891</p>
            <p>E-mail: email@envato.com</p>
          </div>
        </div>
      </div>
      <section class="mb-12 absolute bottom-0 left-0 right-0 z-50">
        <div class="bg-orange-600 alert alert-dismissible fade show rounded-lg py-4 px-6 text-white md:flex justify-between items-center text-center md:text-left">
          <div class="mb-4 md:mb-0 flex items-center flex-wrap justify-center md:justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-4 h-4 mr-2"
            >
              <path
                fill="currentColor"
                d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
              />
            </svg>
            <strong class="mr-1">Limited offer!</strong> Get it now before it's
            to late
          </div>

          <div class="flex items-center justify-center">
            <a
              class="inline-block px-6 py-2.5 bg-white text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out mr-4"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Special Offer
            </a>

            <a
              href=""
              class="text-white"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <svg
                class="w-4 h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
