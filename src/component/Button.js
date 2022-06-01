import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="inline-block font-bold text-center  mr-2 px-6 py-1.5 border-2 border-orange-500 text-orange-500 font-medium text-lg leading-tight skew-x-12 hover:bg-orange-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
};

export default Button;
