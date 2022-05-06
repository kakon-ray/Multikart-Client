import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage: "url('https://i.ibb.co/8mYPVkx/slider2.jpg')",
    height: "50vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };

  return (
    <div style={myStyle} className="relative flex justify-center items-center">
      <h1
        style={{
          color: "white",
          marginTop: "6%",
          textShadow: "2px 2px #7307e6",
        }}
        className=" text-shadow-lg"
      >
        {page}
      </h1>
      <div className="absolute page text-white pageStyle"> </div>
    </div>
  );
}
