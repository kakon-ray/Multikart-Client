import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "../Button";
import CustomLink from "../CustomeLink/CustomeLink";
import img from "../../assets/img/user.png";
import { toast } from "react-toastify";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },

    { name: "My Item", link: "/myitem" },
    { name: "Add Item", link: "/add/additem" },
    { name: "Manage", link: "/manageitems" },
  ];
  let [open, setOpen] = useState(false);

  const navigation = useNavigate();

  const logOut = () => {
    toast.success("Logout Successfully");
    signOut(auth);

    // localStorage.removeItem("accessToken");
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="xl:text-3xl md:text-xl text-indigo-600 mr-1">
            <Link to="/" className="text-purple-600 flex items-center">
              <ion-icon
                name="logo-ionic"
                className="text-purple-600"
              ></ion-icon>
              LOGIKA
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`mr-auto md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 shadow-md" : "top-[-490px]"
          } md:shadow-none`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-6 xl:ml-16 text-x md:my-0 my-7"
            >
              <CustomLink
                to={link.link}
                className="text-gray-500 hover:text-purple-700 duration-500 font-bold"
              >
                {link.name}
              </CustomLink>
            </li>
          ))}

          {!user ? (
            <span className="md:ml-24">
              <Link to="/login">
                <Button>Sign in</Button>
              </Link>
              <Link to="/registation">
                <Button>Sign up</Button>
              </Link>
            </span>
          ) : (
            <>
              <div className="dropdown relative xl:ml-52 md:ml-16">
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
                    className="rounded-full xl:w-12 xl:h-12 md:w-8 md:h-8 w-8 h-8 border-solid border-2 border-purple-500"
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
                  <span className="flex flex-col justify-center">
                    <li className="text-x font-bold text-center text-purple-600 px-5">
                      {user?.displayName}
                    </li>
                    <li className="text-x font-bold text-center py-3 text-purple-600 px-5">
                      {user?.email}
                    </li>
                    <li>
                      <button
                        className="inline-block ml-16 font-bold text-center px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight w-100 hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
  );
};

export default Navbar;
