import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="inline-block font-bold text-center  mr-2 px-6 py-1.5 border-2 border-purple-500 text-purple-500 font-medium text-lg leading-tight skew-x-12 hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
};

export default Button;
