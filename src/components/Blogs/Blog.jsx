import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Blog() {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="all">
        <div className="again all">
          <div className="header flex items-end  mt-[100px]  mr-[50px] justify-between ml-[50px]">
            <div className="text">
              <p className="text-[18px] opacity-80  text-[#626E94] ">با شما در مسیر یادگیری هستیم</p>
              <h1 className="text-[40px] font-bold text-[#000000]">جدیدترین <span className="text-[#0CA0A2]">مقالات</span></h1>
            </div>
            <div className="buttons flex gap-6">
              <img
                src="./Images/Frame 70154.png "
                alt=""
                onClick={() => swiperRef.current.slidePrev()}
                className="prevEl w-[50px] h-[50px]"
              />

              {/*  */}
              <img
                src="./Images/Frame 70154.png"
                alt=""
                onClick={() => swiperRef.current.slideNext()}
                className="nextEl rotate-180 w-[50px] h-[50px]"
              />
          </div>
            </div>

            <div className="slider">
              <Swiper
                ref={swiperRef}
                navigation={{
                  prevEl: ".prevEl",
                  nextEl: ".nextEl",
                }}
                pagination={{
                  clickable: true,
                  enabled: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
              >
                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70183.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
      </div>
    </>
  );
}
