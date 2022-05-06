import React from "react";
import Button from "../../Button";
import PageBanner from "../../PageBanner/PageBanner";
import Fade from "react-reveal/Fade";
import Delivery from "../../Section/Service/Service";
const ServicesPage = () => {
  return (
    <div>
      <PageBanner page="Our Services" />
      <div className="dark:bg-black">
        <Delivery></Delivery>
      </div>
    </div>
  );
};

export default ServicesPage;
