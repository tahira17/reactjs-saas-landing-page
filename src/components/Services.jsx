import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/scrollbar';

import 'swiper/css/pagination';

import "./styles.css";
import {services}  from '../Data/data.js'
// import required modules
import { Pagination } from "swiper/modules";

export const Services = () => {

const Services=services

  return (
    <div name="services" className='bg-slate-100 h-[700px]'>
     <div className="max-w-[1320px] mx-auto">
    <h1 className="text-4xl text-center py-20 text-black font-bold">Services we Offer</h1>
  </div>
      <Swiper
      style={{
        "--swiper-pagination-color": "#800080 ",
        "--swiper-pagination-bullet-inactive-color": "#D3D3D3",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination-bottom": "-6px"
        
  
      }}
      back
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
        {Services.map((item, index) => (
        <SwiperSlide key={index} >
          <div className="bg-white overflow-hidden border-2 hover:border-purple-400 h-full rounded-2xl hover:scale-110 duration-500">
            <div className="rounded-full border-2 h-[100px] w-[100px] ml-6 m-8  hover:border-purple-300">
              <img
                src={item.Image}
                className="px-2 py-4"
                alt="Services"
              />
            </div>
            <h3 className="py-1 m-2 text-bold text-left bottom-0 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700">{item.serviceName}</h3>
            <p className="py-1 m-2 text-gray-500 text-left">
            {item.serviceDesc}
            </p>
          </div>
        </SwiperSlide>
    ))}
    
     
      </Swiper>
    </div>
  );
};

export default Services;
