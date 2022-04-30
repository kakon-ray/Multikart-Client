import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },

    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
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
            <li key={link.name} className="md:ml-20 text-x md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="login">
          <Button>Loign</Button>
        </Link>
        <Link to="registation">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
