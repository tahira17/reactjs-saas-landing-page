import React from "react";
import Marquee from "react-fast-marquee";
const Brands = () => {
  return (
    <div name="brands" className="flex flex-col  items-center  w-full h-full">
      <div className="w-3/4 grid sm:grid-cols-2 gap-8 px-4 ">
        {/* left section */}
        <div data-aos="zoom-in" className="items-center">
          <div className="mt-24 mb-20 lg:mb-20 md:mb-20 lg:m-auto lg:mt-12 lg:ml-10 lg:mr-10">
            <hr class="w-28 h-1 lg:w-48 lg:h-1 md:w-48 md:h-1 sm:w-48 sm:h-1 my-4 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded md:my-10 " />
            <h4 className="text-4xl font-thin">Meet the people </h4>
            <h5 className="text-4xl font-bold">We are Working with</h5>
          </div>
        </div>

        {/* right section */}
      </div>
      {/* </div> */}

      <Marquee className="bg-slate-200">
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo1.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo2.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo3.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo4.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo5.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo6.png")} alt="" />
        </div>
        <div className="m-10 p-10 ">
          <img src={require("../assets/logo7.png")} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
