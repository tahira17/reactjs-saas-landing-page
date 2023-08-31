import React from "react";
import Marquee from "react-fast-marquee";
const Brands = () => {
  return (
    <>
      <div className="lg:m-auto lg:mt-12 lg:ml-64 lg:mb-20">
            <hr class=" h-1 lg:w-28 lg:h-1 md:w-48 md:h-1 sm:w-48 sm:h-1 my-4 bg-purple-800 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h4 className="text-4xl font-thin">Meet the people </h4>
            <h5 className="text-4xl font-bold">We are Working with</h5>
            </div>
      <Marquee className="bg-slate-200">
      <div className="m-10 p-10 ">
          <img src={require("../assets/logo1.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo2.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo3.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo4.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo5.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo6.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo7.png")}  alt="" />
        </div>
      </Marquee>
    </>
  );
};

export default Brands;
