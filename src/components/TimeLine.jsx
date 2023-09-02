import React from 'react'

import {timeline} from '../Data/data.js'
import {timeline2} from '../Data/data.js'


export const TimeLine = () => {

    const TimeLine=timeline
    const TimeLine2=timeline2

  return (
<>
<div name="caseStudies" className="max-w-full mx-auto pt-10">
<hr class="w-20 h-1 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded mb-4 " />

        <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
        How development
        </h4>
        <h5 className="text-4xl text-center font-bold">through Alcaline works</h5>
      </div>
   

  <div 
    class="max-w-[1320px] mt-20 h-full mx-auto grid  lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]"
  >
    {TimeLine.map((item, index) => (
    <div
     key={index}  class=" text-left top-0  mx-auto lg:h-[240px] md:h-[200px] w-[350px]">
    <div class="  text-left m-auto border-2 rounded-md pt-4 lg:h-[180px] md:h-[200px] w-[350px]">
        
      <h3 class="py-1 mx-auto ml-6 font-bold text-lg"> <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">#{item.stepNo}
              </span>{item.timeLineHeading}</h3>
      <p class="text-sm py-1 mx-auto h-[120px] w-[300px]  text-gray-500 ">
        {item.timeLineDesc}
      </p>
    </div>
    <hr class="hidden sm:hidden md:hidden lg:block h-[0.20rem] rotate-90 w-8 ml-40 mt-11  bg-orange-400 border-0 " />
    </div>))}
  
</div>
<hr class="hidden lg:block  lg:h-[0.20rem]  mx-60 md:h-1  sm:h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-400 border-0 rounded " />



 <div 
    class="max-w-[1320px] mt-[0.80rem]   h-full sm:ml-80 mx-auto grid  lg:grid-cols-3 md:grid-cols-2 gap-5 px-[20px]"
  >
    
    {TimeLine2.map((item, index) => (
    <div
     key={index}  class=" text-left top-0 relative mx-auto lg:h-[240px] md:h-[200px] w-[350px] ">
         <hr class="hidden sm:hidden md:hidden lg:block h-[0.20rem] rotate-90 w-8 ml-40  absolute bg-orange-400 border-0 " />
    <div class="  text-left m-auto border-2 mt-10 rounded-md pt-4 lg:h-[180px] md:h-[200px] w-[350px]">
        
      <h3 class="py-1 mx-auto ml-6 font-bold text-lg"> <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">#{item.stepNo}
              </span>{item.timeLineHeading}</h3>
      <p class="text-sm py-1 mx-auto h-[120px] w-[300px]  text-gray-500 ">
        {item.timeLineDesc}
      </p>
    </div>
   
    </div>))}
  
</div>



</>
  )
}
