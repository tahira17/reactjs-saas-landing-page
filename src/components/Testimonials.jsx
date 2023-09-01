import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Commas from "../assets/comma.svg";
import "./styles.css";
import { Autoplay } from "swiper/modules";

import { data } from "../Data/data.js";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  const Testimonials = data;

  return (
    <>
      <div className="max-w-full mx-auto pt-10">
        <h4 className="text-4xl font-thin text-center  text-black mb-4 ">
          Why customers love{" "}
        </h4>
        <h5 className="text-4xl text-center font-bold">working with us</h5>
      </div>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "purple",
          
        "--swiper-navigation-top": "20px"

          }}
          loop={true}
          spaceBetween={50}
          navigation={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
           }}

          initialSlide={2}
          // thumbs={{ swiper: thumbsSwiper }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs , Autoplay]}
          className="testimonialSwiper"
        >
          {Testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="top-0 bottom-0 lg:h-[300px] h-[200px] w-full  ">
                <div className="h-3/4 w-3/4 z-0 relative mx-auto mt-10 items-center justify-center rounded-2xl text-gray-500  ">
                  <div className="ml-0 mr-0 lg:ml-18 md:ml-18 sm:ml-4 w-18 absolute mt-20 ">
                    <img src={Commas} alt="" />
                  </div>

                  <div className="mr-4 xl:mr-18 lg:mr-18 md:mr-18 w-18 right-0 bottom-24 absolute mb-2 rotate-180">
                    <img src={Commas} alt="" />
                  </div>

                  <p className="flex h-3/4 w-3/4 z-0 relative mx-auto mt-40 sm:mt-10 md:mt-10 lg:mt-10 items-center justify-center  rounded-2xl text-gray-500">                    {item.Testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ;
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={50}
          slidesPerView={5}
          initialSlide={2}
          // Responsive breakpoints
          breakpoints={{
            1366: { slidesPerView: 5 },

            1024: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="testimonialSwiper2"
        >
          {Testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div class="rounded-xl  overflow-hidden text-left  h-[90%] w-[90%] items-center top-2 ml-2 mr-2 lg:ml-4">
                <div className="h-20 w-20 m-auto lg:h-40 lg:w-40 lg:m-auto md:h-40 md:w-40 md:m-auto sm:h-40 sm:w-40 sm:m-auto">
                  <img
                    src={item.Image}
                    className="rounded-full h-full"
                    alt={item.name}
                  />
                </div>
                <div className="h-6 w-40 m-auto">
                  <img src={item.Rating} alt="Rating" />
                </div>
                <h3 class="text-bold ml-10 mr-10 text-blue-500 text-center">
                  {item.name}
                </h3>
                <p class=" text-blue-500 text-center m-2 ml-10 mr-10">
                  {item.Profession}
                </p>
              </div>
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </div>
    </>
  );
};
export default Testimonials;
