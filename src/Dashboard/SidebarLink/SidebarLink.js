import React from "react";

const SidebarLink = ({ title, icon }) => {
  return (
    <div>
      <li className="relative ">
        <a
          className="flex  dark:text-white text-orange-600 items-center text-xl py-6 px-6 h-16 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-500 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          {icon}
          <span className="ml-1 dark:text-white text-orange-600">{title}</span>
        </a>
      </li>
    </div>
  );
};

export default SidebarLink;
