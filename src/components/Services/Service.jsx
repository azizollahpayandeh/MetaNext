import React, { useState } from "react";
import Hesebdari from "../Hesebdari/Hesebdari";
import Power from "../Power/Power";
import Conversation from "../Conversation/Conversation";
import Application from "../Application/Application";
import Site from "../Site/Site";
// import { Swiper, SwiperSlide } from "swiper/react";d
import "swiper/css";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Service() {
  const [isBlock, setIsBlock] = useState("hesabdari");

  return (
    <>
      <div className="bg-[#F5F8FC] solid border-[1px] border-white ">
        <div className="all  relative">
          <div className="allll option linkkkk">
            <div className="service mr-[30px]  mt-[40px]    ">
              <div className="text">
                <p className="text-[18px] opacity-50  ">
                  یک پلتفرم برای تمامی نیاز ها
                </p>
                <h1 className="text-[40px] font-semibold mt-[20px]">
                  خدمات ما در متانکست
                </h1>
              </div>
              <div className="options flex gap-[55px] mt-[40px]  mb-[50px] ">
                <div
                  className="box  cursor-pointer  "
                  onClick={() => {
                    setIsBlock("hesabdari");
                  }}
                >
                  <img
                    src={
                      isBlock === "hesabdari"
                        ? "./Images/Group 34762.png"
                        : "./Images/Group 3476233.png"
                    }
                    alt=""
                    className="w-[60px] h-[60px] 
transition-all duration-700 ease-in-out"
                  />
                  <p
                    className={`${
                      isBlock === "hesabdari" ? "" : "text-[#7E8AAB]"
                    } text-[20px] 
transition-all duration-700 ease-in-out`}
                  >
                    حسابداری آنلاین
                  </p>
                  <ProgressBar />
                </div>

                <div
                  className="box cursor-pointer "
                  onClick={() => {
                    setIsBlock("power");
                  }}
                >
                  <img
                    src={
                      isBlock === "power"
                        ? "./Images/3.png"
                        : "./Images/managment1.png"
                    }
                    alt=""
                    className="w-[60px] h-[60px]"
                  />
                  <p
                    className={`${
                      isBlock === "power" ? "" : "text-[#7E8AAB]"
                    } text-[20px]`}
                  >
                    {" "}
                    مدیریت نیروی کار
                  </p>
                  <ProgressBar />
                </div>

                <div
                  className="box cursor-pointer "
                  onClick={() => {
                    setIsBlock("convertion");
                  }}
                >
                  <img
                    src={
                      isBlock === "convertion"
                        ? "./Images/1.png"
                        : "./Images/CRM22.png"
                    }
                    alt=""
                    className="w-[60px] h-[60px]"
                  />
                  <p
                    className={`${
                      isBlock === "convertion" ? "" : "text-[#7E8AAB]"
                    } text-[20px]`}
                  >
                    گفتوگو با مشتریان
                  </p>
                  <ProgressBar />
                </div>

                <div
                  className="box cursor-pointer "
                  onClick={() => {
                    setIsBlock("aplication");
                  }}
                >
                  <img
                    src={
                      isBlock === "aplication"
                        ? "./Images/4.png"
                        : "./Images/mobile11.png"
                    }
                    alt=""
                    className="w-[60px] h-[60px]"
                  />
                  <p
                    className={`${
                      isBlock === "aplication" ? "" : "text-[#7E8AAB]"
                    } text-[20px]`}
                  >
                    اپلیکیشن فروش
                  </p>
                  <ProgressBar />
                </div>

                <div
                  className="box cursor-pointer "
                  onClick={() => {
                    setIsBlock("site");
                  }}
                >
                  <img
                    src={
                      isBlock === "site"
                        ? "./Images/2.png"
                        : "./Images/Group34.png"
                    }
                    alt=""
                    className="w-[60px] h-[60px]"
                  />
                  <p
                    className={`${
                      isBlock === "site" ? "" : "text-[#7E8AAB]"
                    } text-[20px]`}
                  >
                    سایت فروش
                  </p>
                  <ProgressBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      > */}
      {/* <SwiperSlide> */}
      <div className="allllllll main meeeeeeeee">
        {isBlock === "hesabdari" ? <Hesebdari /> : ""}
        {isBlock === "power" ? <Power /> : ""}
        {isBlock === "convertion" ? <Conversation /> : ""}
        {isBlock === "aplication" ? <Application /> : ""}
        {isBlock === "site" ? <Site /> : ""}
      </div>
      </div>

      {/* </SwiperSlide> */}
      {/* <SwiperSlide>
          <div className="allllllll main meeeeeeeee">
            {isBlock === "hesabdari" ? <Hesebdari /> : ""}
            {isBlock === "power" ? <Power /> : ""}
            {isBlock === "convertion" ? <Conversation /> : ""}
            {isBlock === "aplication" ? <Application /> : ""}
            {isBlock === "site" ? <Site /> : ""}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="allllllll main meeeeeeeee">
            {isBlock === "hesabdari" ? <Hesebdari /> : ""}
            {isBlock === "power" ? <Power /> : ""}
            {isBlock === "convertion" ? <Conversation /> : ""}
            {isBlock === "aplication" ? <Application /> : ""}
            {isBlock === "site" ? <Site /> : ""}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="allllllll main meeeeeeeee">
            {isBlock === "hesabdari" ? <Hesebdari /> : ""}
            {isBlock === "power" ? <Power /> : ""}
            {isBlock === "convertion" ? <Conversation /> : ""}
            {isBlock === "aplication" ? <Application /> : ""}
            {isBlock === "site" ? <Site /> : ""}
          </div>
        </SwiperSlide> */}
      {/* </Swiper> */}
    </>
  );
}
