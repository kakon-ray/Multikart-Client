import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "../Button";
import CustomLink from "../CustomeLink/CustomeLink";
import img from "../../assets/img/user.png";
import { toast } from "react-toastify";
import "./Navbar.css";
const Navbar = ({ sendDataToParent }) => {
  const [user, loading, error] = useAuthState(auth);
  let [open, setOpen] = useState(false);
  const navigation = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "All Inventory", link: "/allinventory" },
  ];

  let userLinks = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "All Inventory", link: "/allinventory" },

    { name: "My Item", link: "/myitem" },
    { name: "Add Item", link: "/add" },
    { name: "Manage Inventory", link: "/manageitems" },
  ];

  const logOut = () => {
    toast.success("Logout Successfully");
    signOut(auth);

    // localStorage.removeItem("accessToken");
  };

  return (
    <div
      className="shadow-md w-full fixed top-0 left-0 right-0 z-10 lg:py-0"
      id="navbar"
    >
      <div className="lg:flex items-center justify-between bg-white dark:bg-black py-4 lg:px-10 px-7 lg:py-2">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="xl:text-3xl md:text-xl text-indigo-600">
            <Link to="/" className="text-yellow-400 flex items-center">
              PORTFOLIO
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer lg:hidden dark:text-slate-200"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${
            open ? "md:top-6 sm:top-6 shadow-md " : "top-[-490px]"
          } lg:shadow-none`}
        >
          <ul className="lg:flex lg:items-center lg:py-0 md:py-4 sm:py-4 bg-white dark:bg-black pl-8">
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

            <div
              className={`form-check form-switch pl-0 xl:mx-6 md:my-6 sm:my-6 lg:my-0 xl:mb-0${
                user ? "lg:mr-0 xl:mr-0" : ""
              }`}
            >
              <input
                className="form-check-input appearance-none w-9 rounded-full  h-5 align-top  bg-no-repeat checked:bg-purple-600 bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                onChange={(e) => sendDataToParent(e.target.checked)}
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>

            {!user ? (
              <span className="lg:ml-8 md:ml-2">
                <Link to="/login">
                  <Button>Sign in</Button>
                </Link>
                <Link to="/registation">
                  <Button>Sign up</Button>
                </Link>
              </span>
            ) : (
              <>
                <div className="dropdown relative xl:ml-24 md:ml-2">
                  <button
                    className="
                              dropdown-toggle
                              font-medium
                              text-xs
                              leading-tight
                              uppercase
                              rounded-full
                              transition
                              duration-150
                              ease-in-out
                              flex
                              items-center
                              whitespace-nowrap
                            "
                    type="button"
                    id="dropdownMenuButton4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user?.photoURL ? user?.photoURL : img}
                      className="rounded-full xl:w-10 xl:h-10 md:w-8 md:h-8 w-8 h-8 border-solid border-2 border-purple-500"
                      alt=""
                    />
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
                               dark:bg-black
                              dropdown-menu
                              min-w-max
                              absolute
                              hidden
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
                            "
                    aria-labelledby="dropdownMenuButton4"
                  >
                    <span className="flex flex-col justify-center ">
                      <li className="text-x font-bold text-center text-purple-600 px-5">
                        {user?.displayName}
                      </li>
                      <li className="text-x font-bold text-center py-3 text-purple-600 px-5">
                        {user?.email}
                      </li>
                      <li>
                        <button
                          className="inline-block ml-10 font-bold text-center  px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight w-100 hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          onClick={logOut}
                        >
                          Sign Out
                        </button>
                      </li>
                    </span>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
