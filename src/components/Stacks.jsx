import React from 'react'
import {stack} from '../Data/data'

const Stacks = () => {

 
  return (
<div name='skills' className='w-full h-screen bg-footer_pattern bg-no-repeat bg-cover bg-bottom text-gray-900'>
      {/* Container */}
      <div className='max-w-[1000px] max-h-[1000px] mx-auto p-4 flex flex-col justify-center bg-whitew-full'>
      


   
<div name="caseStudies" className="max-w-full mx-auto pt-10">
<hr class="w-20 h-1 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-0 rounded mb-4 " />

        <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
          Our Stack{" "}
        </h4>
   
      </div>

          <div data-aos="zoom-in" className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>


          {stack.map((item, index) => (
              <div key={index} className='h-[200px] content-center  hover:scale-110 duration-500'>
                  <img className='mx-auto mt-10' src={item.Image} alt="HTML icon" />
                  
              </div>

          ))}
 
              {/* <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto'  alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>

              <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto'  alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto'  alt="HTML icon" />
                  <p className='my-4'>Vue Js</p>
              </div>
              <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#27b59f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto'  alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div> */}
    
            
       
          </div>
      </div>
    </div>
  )
}

export default Stacks

