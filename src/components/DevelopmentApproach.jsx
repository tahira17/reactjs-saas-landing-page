import React from "react";

import { developmentApproach } from "../Data/data";

const DevelopmentApproach = () => {
  const DevelopmentApproach = developmentApproach;
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        name="developmentApproach"
        className=" bg-slate-100 max-w-full mx-auto pt-10 pb-20"
      >
        <hr class="w-20 h-1 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded mb-4 " />

        <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
          Our Design and
        </h4>
        <h5 className="text-4xl text-center font-bold">development Approach</h5>
      </div>

      <div className="bg-slate-100 pb-20">
        <div class=" max-w-[1320px] h-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-5 ">
          {DevelopmentApproach.map((item, index) => (
            <div
              data-aos="flip-right"
              key={index}
              className=" flex bg-white h-[250px] rounded-md items-center"
            >
              <div className=" h-2/3 w-1/3 ml-2 lg:ml-4 lg:mt-6 mt-4 ">
                <img
                  src={item.developAppBg}
                  className="m-2 lg:m-4 absolute"
                  alt="Services"
                />
                <img
                  src={item.developAppLogo}
                  className="relative m-4 lg:m-[1.75rem]"
                  alt="Services"
                />
              </div>
              <div className="ml-4">
                <h3 className="py-1 m-2 text-bold text-left bottom-0 font-bold text-xl font-sans ">
                  {item.developAppHeading}
                </h3>
                <p className="py-1 m-2 text-gray-500 text-left">
                  {item.developAppDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DevelopmentApproach;
