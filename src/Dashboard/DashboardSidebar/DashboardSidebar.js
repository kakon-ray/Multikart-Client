import React from "react";
import SidebarOffCanvas from "../SidebarOffCanvas/SidebarOffCanvas";

const DashboardSidebar = () => {
  return (
    <div className="dark:bg-black">
      <div
        className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <SidebarOffCanvas />
      </div>
    </div>
  );
};

export default DashboardSidebar;
