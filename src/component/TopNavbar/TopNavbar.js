import React from "react";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDashboard } from "@fortawesome/free-solid-svg-icons";
const TopNavbar = ({ sendDataToParent }) => {
  return (
    <section>
      <div class="bg-orange-600 flex justify-end py-2 gap-6 items-center">
        <div className={`form-check form-switch pl-0 flex items-center`}>
          <input
            className="form-check-input appearance-none w-7 rounded-full h-4 align-top  bg-no-repeat checked:bg-orange-800 bg-orange-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            onChange={(e) => sendDataToParent(e.target.checked)}
            role="switch"
            id="flexSwitchCheckChecked"
          />
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faDashboard} className="me-1" /> */}
          <p className="text-white ">Dashboard</p>
        </div>

        <ion-icon
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          name="reorder-four-outline"
          style={{ color: "white", fontSize: "26px", marginRight: "28px" }}
        ></ion-icon>
      </div>

      <DashboardSidebar />
    </section>
  );
};

export default TopNavbar;
