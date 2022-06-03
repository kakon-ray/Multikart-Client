import React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "../SidebarLink/SidebarLink";
const SidebarOffCanvas = () => {
  return (
    <div className="lg:col-span-1 col-span-5 ">
      <div className="w-100 h-screen  shadow-md bg-white px-1">
        <h1 className="text-3xl text-secondary p-6">Dashboard</h1>
        <ul className="relative">
          <Link to="/dashboard">
            <SidebarLink
              title="Profile"
              icon={<ion-icon name="person-circle-outline"></ion-icon>}
            />
          </Link>

          <>
            <Link to="/dashboard/addproduct">
              <SidebarLink
                title="Add Product"
                icon={<ion-icon name="cloud-upload-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard/makeadmin">
              <SidebarLink
                title="Make Admin"
                icon={<ion-icon name="person-add-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard/manageAllOrder">
              <SidebarLink
                title="Manage All Order"
                icon={<ion-icon name="cut-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard/manageProduct">
              <SidebarLink
                title="Manage Product"
                icon={<ion-icon name="build-outline"></ion-icon>}
              />
            </Link>
          </>

          <>
            <Link to="/dashboard/myorder">
              <SidebarLink
                title="My Order"
                icon={<ion-icon name="infinite-outline"></ion-icon>}
              />
            </Link>
            <Link to="/dashboard/dashboardreview">
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
              <span className="ml-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarOffCanvas;
