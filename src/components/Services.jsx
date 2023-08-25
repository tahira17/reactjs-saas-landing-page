import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/scrollbar';

import 'swiper/css/pagination';

import "./styles.css";

// import required modules
import {Scrollbar, Pagination } from "swiper/modules";

export const Services = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        slideToClickedSlide={true}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 10,
          stretch: 10,
          depth: 10,
          modifier: 1,
          slideShadows: false,
        }}    
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination ]}
        className="mySwiper"
      >
        {/* Swiper slide 1 */}
        <SwiperSlide>
          <div className="overflow-hidden border-2 hover:border-indigo-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-indigo-300">
              <img
                src={require("../../src/assets/1.png")}
                className="px-2 py-4"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0">Agency</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
              Whether you are a small agency or a big one. Our influencer
              database will help you get better results for your clients.
            </p>
          </div>
        </SwiperSlide>

        {/* Swiper slide 2 */}
        <SwiperSlide>
          <div className="  overflow-hidden border-2 hover:border-indigo-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-indigo-300">
              <img
                src={require("../../src/assets/2.png")}
                className="px-4 py-4"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0">Agency</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
              Whether you are a small agency or a big one. Our influencer
              database will help you get better results for your clients.
            </p>
          </div>
        </SwiperSlide>

        {/* Swiper slide 3 */}

        <SwiperSlide>
          <div className="  overflow-hidden border-2 hover:border-indigo-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-indigo-300">
              <img
                src={require("../../src/assets/5.png")}
                className="px-4 py-6"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0">Agency</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
              Whether you are a small agency or a big one. Our influencer
              database will help you get better results for your clients.
            </p>
          </div>
        </SwiperSlide>

        {/* Swiper slide 4 */}
        <SwiperSlide>
          <div className="  overflow-hidden border-2 hover:border-indigo-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-indigo-300">
              <img
                src={require("../../src/assets/3.png")}
                className="px-4 py-4"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0">Agency</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
              Whether you are a small agency or a big one. Our influencer
              database will help you get better results for your clients.
            </p>
          </div>
        </SwiperSlide>

        {/* Swiper slide 5 */}
        <SwiperSlide>
          <div className="  overflow-hidden border-2 hover:border-indigo-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-indigo-300">
              <img
                src={require("../../src/assets/4.png")}
                className="px-4 py-4"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0">Agency</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
              Whether you are a small agency or a big one. Our influencer
              database will help you get better results for your clients.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Services;
