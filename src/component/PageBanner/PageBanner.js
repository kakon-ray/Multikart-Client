import React from "react";

export default function PageBanner({ page }) {
  const myStyle = {
    backgroundImage: "url('https://static.dw.com/image/50927628_101.jpg')",
    height: "50vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: ".2%",
  };

  return (
    <div style={myStyle} className="relative flex justify-center items-center">
      <h1 style={{ color: "white", marginTop: "6%" }} className="shadow-md">
        {page}
      </h1>
      <div className="absolute page text-white pageStyle"> </div>
    </div>
  );
}
