import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "../Button";
import CustomLink from "../CustomeLink/CustomeLink";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Blog", link: "/blog" },

    { name: "My Item", link: "/myitem" },
    { name: "Add Item", link: "/add" },
    { name: "Manage", link: "/manageitems" },
  ];
  let [open, setOpen] = useState(false);

  const navigation = useNavigate();

  const logOut = () => {
    console.log("log out");
    signOut(auth);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
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
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`mr-auto md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 shadow-md" : "top-[-490px]"
          } md:shadow-none`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-16 text-x md:my-0 my-7">
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
            <button
              className="inline-block md:ml-44 font-bold text-center px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight rounded-full hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={logOut}
            >
              Sign Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
