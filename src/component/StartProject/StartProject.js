import React from "react";
import img from "../../assets/img/startproject.png";
import "./StartProject.css";
import Fade from "react-reveal/Fade";

const StartProject = () => {
  return (
    <div id="startProject">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 container mx-auto px-4 md:px-20 py-8 pt-1">
        <Fade left>
          <div className="">
            <img src={img} alt="Start Your Project" className="project-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="my-auto sm:pl-5 sm:pt-8">
            <h1 className="text-5xl font-bold text-purple-600 xl:skew-x-12 ">
              We Like to Start Your Project With Us
            </h1>
            <p className="text-lg py-2 text-gray-400 font-bold xl:skew-x-12 xl:ml-4">
              We like to start your project with us. We start your project an
              ddesign dress.We like to start your project with us. We start your
              project an ddesign dress.
            </p>
            <button className="inline-block xl:ml-8 font-bold text-center xl:skew-x-12 px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-lg leading-tight w-100 hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Get Order
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default StartProject;
