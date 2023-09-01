import React from 'react'


import { casestudies } from '../Data/data'

const CaseStudies = () => {

    const CaseStudies=casestudies
  return (

<>

<div name="caseStudies" className="max-w-full mx-auto pt-10">
<hr class="w-20 h-1 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded mb-4 " />

        <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
          Our recent{" "}
        </h4>
        <h5 className="text-4xl text-center font-bold">Case Studies</h5>
      </div>
   


    {CaseStudies.map((item, index) => (
   <div className='flex flex-col justify-center items-center w-full h-full pt-10 pb-10'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    
        <div>

        </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4'>

         <img src={item.Image} />
        



          <div data-aos="zoom-in"  style={{ backgroundColor: `${item.color}` }} className='rounded-b-2xl lg:rounded-br-2xl lg:rounded-bl-none lg:rounded-r-2xl md:rounded-r-2xl sm:rounded-r-2xl '>
            <h2 className='mt-10 lg:mt-10 md:mt-10 sm:mt-2 sm:ml-2 ml-10 lg:ml-10 md:ml-10 text-2xl sm:text-xl font-bold'>{item.caseStudyHeading}</h2>
            <p className='mt-10 lg:mt-10 md:mt-10 sm:mt-2 sm:ml-2 ml-10 lg:ml-10 md:ml-10  mb-10 mr-6'>{item.caseStudyDesc} </p>  
          </div>
        
    </div>
  </div>
      ))}
      </>

  )
}

export default CaseStudies