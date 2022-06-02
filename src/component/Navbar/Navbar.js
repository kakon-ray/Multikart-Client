import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "../Button";
import CustomLink from "../CustomeLink/CustomeLink";
import userPhoto from "../../assets/img/user.png";
import { toast } from "react-toastify";
import logo from "../../assets/img/logo.png";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { ReactComponent as Notification } from "../../assets/svg/notification.svg";

const Navbar = ({ sendDataToParent }) => {
  const [user, loading, error] = useAuthState(auth);
  let [open, setOpen] = useState(false);
  const navigation = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Shop", link: "/shop" },
  ];

  let userLinks = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Shop", link: "/shop" },

    // { name: "My Item", link: "/myitem" },
    // { name: "Add Item", link: "/add" },
    // { name: "Manage Inventory", link: "/manageitems" },
  ];

  const logOut = () => {
    toast.success("Logout Successfully");
    signOut(auth);

    // localStorage.removeItem("accessToken");
  };

  return (
    <nav
      className="
      dark:bg-black
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-md
        navbar navbar-expand-lg navbar-light
        "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
              "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a
            className="
                  flex
                  items-center
                  text-gray-900
                  hover:text-gray-900
                  focus:text-gray-900
                  mt-2
                  lg:mt-0
                  mr-1
                "
            href="#"
          >
            <img
              src={logo}
              style={{ height: "25px" }}
              alt=""
              loading="lazy"
              className="my-2 py-1 lg:py-0"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 lg:pl-8 list-style-none mr-auto">
            {user ? (
              <>
                {userLinks.map((link) => (
                  <li
                    key={link.name}
                    className="md:mr-5 xl:mr-12 lg:mr-8 text-lg md:my-3 my-7"
                  >
                    <CustomLink
                      to={link.link}
                      className="text-gray-500 hover:text-purple-700 duration-500 font-bold"
                    >
                      {link.name}
                    </CustomLink>
                  </li>
                ))}
              </>
            ) : (
              <>
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className="md:mr-5 xl:mr-12 lg:mr-8 text-lg md:my-3 my-7"
                  >
                    <CustomLink
                      to={link.link}
                      className="text-gray-500 hover:text-purple-700 duration-500 font-bold"
                    >
                      {link.name}
                    </CustomLink>
                  </li>
                ))}
              </>
            )}
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="flex items-center relative">
          {/* <!-- Icon --> */}
          <div className={`form-check form-switch pr-3 pl-0 flex items-center`}>
            <input
              className="form-check-input appearance-none w-7 rounded-full h-4 align-top  bg-no-repeat checked:bg-orange-600 bg-orange-600 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              onChange={(e) => sendDataToParent(e.target.checked)}
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
          <a
            className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
            href="#"
          >
            <CartIcon />
          </a>

          <a
            className="
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      mr-4
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <ion-icon
              name="heart-outline"
              style={{ fontSize: "22px" }}
            ></ion-icon>
            <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-3 ml-3 py-0 px-1.5">
              1
            </span>
          </a>

          <div className="dropdown relative">
            <a
              className="
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      mr-4
                      dropdown-toggle
                      hidden-arrow
                      flex items-center
                    "
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Notification />
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                1
              </span>
            </a>
            <ul
              className="
                    dropdown-menu
                    min-w-max
                    absolute
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                    left-auto
                    right-0
                  "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                  href="#"
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {user ? (
                <img
                  src={user?.photoURL ? user?.photoURL : userPhoto}
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 mx-1 py-2.5 bg-gray-200 text-orange-700 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block mx-1 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign up
                  </button>
                </>
              )}
            </a>
            <ul
              className="
                    dropdown-menu
                    min-w-max
                    absolute
                  
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                    left-auto
                    right-0
                  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li onClick={logOut}>
                <a
                  className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                  href="#"
                >
                  Log Out
                </a>
              </li>
              <li>
                <a
                  className="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                  href="#"
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                  href="#"
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
};

export default Navbar;
