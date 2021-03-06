import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import MainSidebar from "../MainSidebar/MainSidebar";
const Dashboard = () => {
  return (
    <div className="dark:bg-black">
      <div>
        <div className="grid grid-cols-4 ">
          <div className="lg:col-span-1 col-span-4 z-0">
            <MainSidebar></MainSidebar>
          </div>
          <div className="lg:col-span-3 col-span-4 border">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
