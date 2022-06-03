import React from "react";
import Fade from "react-reveal/Fade";
import PageBanner from "../../component/PageBanner/PageBanner";
import Delivery from "../../component/Section/Service/Service";

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
