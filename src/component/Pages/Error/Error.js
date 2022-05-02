import React from "react";
import PageBanner from "../../PageBanner/PageBanner";
import img from "../../../assets/img/error.png";
const Error = () => {
  return (
    <div>
      <img src={img} alt="Error 404" className="object-contain" />
    </div>
  );
};

export default Error;
