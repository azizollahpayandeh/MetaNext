import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AboutMetaNext() {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="alllll">
        <div className="alllll overflow-x-hidden flex justify-around  mt-[100px] mb-[50px] relative">
          <div className="right flex flex-col justify-center">
            <p className="text-[#626E94] text-[18px]">
              تجربه مدیراین کسب و کاری که به ما اعتماد کردن
            </p>
            <h1 className="text-[40px] font-bold w-[316px] h-[145px] mt-[20px]">
              در مورد <span className="text-[#0CA0A2]">متانکست</span> چه
              میشنویم?
            </h1>

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

          <div className="leftAll w-[900px]  float-left ">
            <div className="middle">
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
                slidesPerView={2}
                loop={true}
              >
                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="./Images/Group 70177.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
