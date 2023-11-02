

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideCompo from "../SlideCompo/SlideCompo";

export default function AboutMetaNext() {
  const [isBlock, setIsBlock] = useState("");
  const swiperRef = useRef(null);


  return (
    <div className="alllll relative">
      <img src="./Images/Vector 51.png" alt="" className="absolute top-[-100px] right-[350px]" />
      <img src="./Images/Ellipse 388.png" alt="" className="absolute top-[50px] right-[40px]" />
      <img src="./Images/Star 3.png" alt="" className="absolute top-[500px]  right-[300px]" />
      <img src="./Images/Group 4.png" alt="" className="absolute top-[550px]  right-[80px]" />

      <div className="alllll overflow-x-hidden flex justify-around mt-[100px] mb-[50px] relative">
        <div className="right flex flex-col justify-center">
          <p className="text-[#626E94] text-[18px]">
            تجربه مدیراین کسب و کاری که به ما اعتماد کردن
          </p>
          <h1 className="text-[40px] font-bold w-[316px] h-[145px] mt-[20px]">
            در مورد <span className="text-[#0CA0A2]">متانکست</span> چه میشنویم?
          </h1>
          <div className="buttons flex gap-6 items-center">
            <img
              src={isBlock === "right" ?  "./Images/Frame 70153.png" : "./Images/Frame 70154.png" }
              alt=""
              onClick={() => {
                setIsBlock('right')
              }}
              className={`prevEl w-[50px] h-[50px] cursor-pointer ${isBlock === "right" ? "rotate-180" : ""}`}
            />
            <img src="./Images/Ellipse 389.png" alt="" className="h-[10px]" />
            <img
              src={isBlock === "left" ? "./Images/Frame 70153.png":   "./Images/Frame 70154.png" }
              alt=""
              onClick={() => {
                setIsBlock('left')
              }}
              className={` ${isBlock === "left" ? "" : "rotate-180"} nextEl  w-[50px] h-[50px]  cursor-pointer`}
            />
          </div>
        </div>
        <div className="leftAll w-[900px] float-left">
          <div className="middle">
            <Swiper
              ref={swiperRef}
              navigation={{
                prevEl: ".prevEl",
                nextEl: ".nextEl",
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
                <div className="slideBox">
                  <SlideCompo
                    srcImgArr="./Images/arrow-up-right.png"
                    srcImgPerc="./Images/+90%.png"
                    srcImgVideo="./Images/Rectangle 9188.png"
                    styleBg="bg-[#FF9F1C1A]"
                    textColor="text-orange-400"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="slideBox ">
                    <SlideCompo
                      srcImgArr="./Images/arrow-up-right (2).png"
                      srcImgVideo="./Images/Rectangle 9188 (2).png"
                      srcImgPerc="./Images/+98%.png"
                      styleBg="bg-[#35D5A51A]"
                      textColor="text-green-400"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slideBox ">
                    <SlideCompo
                      srcImgArr="./Images/arrow-up-right.png"
                      srcImgPerc="./Images/+90%.png"
                      srcImgVideo="./Images/Rectangle 9188.png"
                      styleBg="bg-[#FF9F1C1A]"
                      textColor="text-orange-400"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slideBox ">
                    <SlideCompo
                      srcImgArr="./Images/arrow-up-right (2).png"
                      srcImgVideo="./Images/Rectangle 9188 (2).png"
                      srcImgPerc="./Images/+98%.png"
                      styleBg="bg-[#35D5A51A]"
                      textColor="text-green-400"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slideBox ">
                    <SlideCompo
                      srcImgArr="./Images/arrow-up-right.png"
                      srcImgPerc="./Images/+90%.png"
                      srcImgVideo="./Images/Rectangle 9188.png"
                      styleBg="bg-[#FF9F1C1A]"
                      textColor="text-orange-400"
                    />
                  </div>{" "}
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slideBox ">
                    <SlideCompo
                      srcImgArr="./Images/arrow-up-right (2).png"
                      srcImgVideo="./Images/Rectangle 9188 (2).png"
                      srcImgPerc="./Images/+98%.png"
                      styleBg="bg-[#35D5A51A]"
                      textColor="text-green-400"
                    />
                  </div>{" "}
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
