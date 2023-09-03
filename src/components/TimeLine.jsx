import React from "react";

import { timeline } from "../Data/data.js";
import { timeline2 } from "../Data/data.js";
import { timelineforsmallerscreen } from "../Data/data.js";

export const TimeLine = () => {
  const TimeLine = timeline;
  const TimeLine2 = timeline2;
  const TimeLineforSmallerScreen = timelineforsmallerscreen;
  return (
    <>
      <div className="bg-white">
        <div name="timeLine" className="max-w-full mx-auto pt-10">
          <hr class="w-20 h-1 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded mb-4 " />

          <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
            How development
          </h4>
          <h5 className="text-4xl text-center font-bold">
            through Alcaline works
          </h5>
        </div>

{/* Upper Grid */}
        <div class="max-w-[1320px] mt-20 h-full  mx-auto grid  lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]">
          {TimeLine.map((item, index) => (
            <div
              key={index}
              class=" text-left top-0 hidden lg:block  mx-auto lg:w-[300px] lg:h-[240px] md:h-[200px] w-[350px]"
            >
              <div class="  text-left m-auto border-2 rounded-md pt-4 lg:h-[180px] lg:w-[300px] md:h-[200px] xl:w-[350px]">
                <h3 class="py-1 mx-auto ml-6 font-bold text-lg">
                  {" "}
                  <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    #{item.stepNo}
                  </span>
                  {item.timeLineHeading}
                </h3>
                <p class="text-sm py-1 mx-auto h-[120px] w-[300px]  text-gray-500 ">
                  {item.timeLineDesc}
                </p>
              </div>
              <hr class="hidden sm:hidden md:hidden lg:block h-[0.20rem] rotate-90 w-8 xl:ml-30 lg:ml-24 mt-11  bg-orange-400 border-0 " />
            </div>
          ))}
        </div>
        
        <hr class="hidden lg:block lg:w-90 lg:mx-10 xl:w-[80rem] lg:h-[0.24rem] xl:h-[0.24rem] xl:mx-auto md:h-1  bg-gradient-to-r from-orange-300 via-orange-500 to-orange-400 border-0 rounded " />

{/* Lower Grid */}
<div class="max-w-[1320px] mt-4 h-full  mx-auto grid  lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]">

{/* <div class="max-w-[1320] mt-4  h-full xl:bg-blue-600 lg:bg-blue-900 md:bg-blue-200 mx-auto grid  lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]">
         */}
        
          {TimeLine2.map((item, index) => (
             <div
             key={index}
             class=" text-left  xl:ml-10 lg:ml-0 top-0  hidden lg:block lg:mx-10  xl:mx-auto lg:w-[300px] lg:h-[240px] md:h-[200px] w-[350px]"
           >
              <hr class="hidden sm:hidden md:hidden lg:block h-[0.20rem] rotate-90 w-8 ml-40  absolute bg-orange-400 border-0 " />
              <div class=" text-left   m-auto border-2 mt-10 rounded-md pt-4 lg:w-[300px]  lg:h-[180px] md:h-[200px] xl:w-[350px]">
                <h3 class="py-1 mx-auto ml-6 font-bold text-lg">
                  {" "}
                  <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    #{item.stepNo}
                  </span>
                  {item.timeLineHeading}
                </h3>
                <p class="text-sm px-2 py-1 my-auto mx-auto h-[120px] w-[300px]  text-gray-500 ">
                  {item.timeLineDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* // SmaLLLER RESOLUTOPNS */}

        <div class="flex flex-col  justify-center items-center w-full h-full lg:hidden ">
          <div class="max-w-[1000px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]  items-center mb-10">
            {TimeLineforSmallerScreen.map((item, index) => (
              <div
                key={index}
                class="  text-left m-auto border-2 rounded-md pt-4 lg:h-[180px] md:h-[200px] w-[350px]"
              >
                <h3 class="py-1 mx-auto ml-6 font-bold text-lg">
                  {" "}
                  <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    #{item.stepNo}
                  </span>
                  {item.timeLineHeading}
                </h3>
                <p class="text-sm py-1 mx-auto h-[120px] w-[300px]  text-gray-500 ">
                  {item.timeLineDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
