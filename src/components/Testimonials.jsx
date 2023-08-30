import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Commas from '../assets/comma.svg'

import "./stylesforTestimonials.css";
import { data } from "../Data/data.js";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  const Testimonials = data;

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "purple",
          "--swiper-pagination-color": "purple",
        }}
        loop={true}
        spaceBetween={50}
        navigation={true}
        initialSlide={2}

        // thumbs={{ swiper: thumbsSwiper }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border-6 top-10 lg:h-[600px] h-[400px] w-full bg-blue-400">

              <div className="ml-4 lg:ml-24 w-18 absolute mt-20">
<img src={Commas} alt=""/>
              </div>
              <p className="h-3/4 w-3/4 z-0 relative mx-auto mt-8 items-center justify-center  rounded-2xl text-gray-500 border-2 overflow-hidden">
                {item.Testimonial}
              </p>
            </div>
          </SwiperSlide>
        ))}
        ;
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={50}
        slidesPerView= {5}
        initialSlide={2}

        // Responsive breakpoints
        breakpoints= {{
1366:{slidesPerView:5},

1024:{slidesPerView:3},
          768:{slidesPerView : 3},
          640:{slidesPerView : 2},
          480:{slidesPerView : 1},
          320:{slidesPerView : 1},

        } }
      
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
          
         
          <div class="text-left  h-full w-full items-center hover:scale-110 duration-500 top-10"
    >
      <div className=" h-40 w-40 m-auto">
      <img src={item.Image} className="rounded-full h-full " alt={item.name} />
    

      </div>
      <div className=" h-10 w-50 m-10 bg-slate-400 items-center">
      <img src={item.Rating} className=" bg-black" alt='Rating'/>

      </div>
      <h3 class="py-1 m-2 text-bold ml-10 text-blue-500 text-center">
        {item.name}
      </h3>


      {/* svgs for starrs */}
      <p class="py-1 m-2 text-gray-500 ml-10 text-center">
       {item.Profession}
      </p>
    </div>
       
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </>
  );
};
export default Testimonials;
