import React from 'react'
import developerlogo from '../assets/Ik developers.svg'

export const Footer = () => {
  return (
  <div class="py-14 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div
        class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:gap-8 text-slate-500"
      >
        <div class="text-left">
          <div data-aos="fade-up" data-aos-duration="800">
            <img
              width="138"
              height="32"
              class="h-8"
              src={developerlogo}
              alt="ContentStudio"
            />
            <p class="text-justify font-light py-5 sm:space-x-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. .
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" class=" w-[150px] lg:ml-40 md:ml-10 sm:ml-30">
          <h3 class="font-semibold mb-4 ml-4">Links</h3>
          <ul class="font-light text-sm">
            <li className="my-3">
             About Us
            </li>

            <li className="my-3">
              Services
            </li>
            <li className="my-3">
              Case Studies
            </li>
            <li className="my-3">
              How it works
            </li>
            <li className="my-3">
              Blog
            </li>
            <li className="my-3">
              Career
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" class="w-full lg:ml-40 md:ml-10 sm:ml-30">
          <h3 class="font-semibold mb-4">Contact us</h3>
         <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
         </p>
        </div>
      
      </div>

  

      
 
   
    </div>
  </div>
  )
}
