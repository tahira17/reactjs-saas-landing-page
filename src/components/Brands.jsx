import React from "react";
import Marquee from "react-fast-marquee";
const Brands = () => {
  return (
    <>
      <Marquee className="bg-slate-200">
      <div className="m-10 p-10 ">
          <img src={require("../assets/logo5.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo3.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/Logo-7.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo8.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/Logo-9.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/Logo-6.png")}  alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo9.png")}  alt="" />
        </div>
      </Marquee>
    </>
  );
};

export default Brands;
