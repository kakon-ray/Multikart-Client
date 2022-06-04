import React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "../SidebarLink/SidebarLink";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
const MainSidebar = () => {
  return (
    <div>
      <div className="lg:col-span-1 col-span-5 dark:bg-black">
        <div className="w-100 h-screen hidden lg:block border shadow-md bg-white px-1 dark:bg-black dark:text-white">
          <h1 className="text-2xl dark:text-white p-5 text-gray-500">
            Manage My Account
          </h1>
          <ul className="relative">
            <Link to="/dashboard">
              <SidebarLink
                title="Profile"
                icon={
                  <ion-icon
                    name="person-circle-outline"
                    style={{ fontSize: "23px" }}
                  ></ion-icon>
                }
              />
            </Link>

            <>
              <Link to="/dashboard/cartlist">
                <SidebarLink title="Cart List" icon={<CartIcon />} />
              </Link>
              <Link to="/dashboard/wishlist">
                <SidebarLink
                  title="Wish List"
                  icon={
                    <ion-icon
                      name="heart-outline"
                      style={{ fontSize: "20px" }}
                    ></ion-icon>
                  }
                />
              </Link>
              <Link to="/dashboard/comparelist">
                <SidebarLink
                  title="Compare List"
                  icon={
                    <FontAwesomeIcon icon={faCodeCompare} className="text-sm" />
                  }
                />
              </Link>
              <Link to="/dashboard/myorder">
                <SidebarLink
                  title="My Order"
                  icon={<ion-icon name="build-outline"></ion-icon>}
                />
              </Link>
            </>

            <>
              <Link to="/dashboard/addReview">
                <SidebarLink
                  title="Add Review"
                  icon={<ion-icon name="star-outline"></ion-icon>}
                />
              </Link>
            </>

            <li className="relative">
              <a
                className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <ion-icon name="log-out-outline"></ion-icon>
                <span className="ml-1 dark:text-light">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
