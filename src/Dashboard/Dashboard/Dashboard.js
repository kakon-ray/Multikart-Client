import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import MainSidebar from "../MainSidebar/MainSidebar";
const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 ">
          <div className="lg:col-span-1 col-span-4">
            <MainSidebar></MainSidebar>
          </div>
          <div className="lg:col-span-3 col-span-4">
            <Outlet />
          </div>
        </div>

        <div className="sidebutton">
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="inline-block font-bold text-center mr-2 px-6 py-2 border border-gray-500 text-white font-medium text-xs leading-tight  bg-orange-600 hover:bg-red-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            DASHBOARD
          </button>
        </div>

        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
