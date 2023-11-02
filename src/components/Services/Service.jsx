import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ServicesData from "../../data2";
import ProgressBar from "../ProgressBar/ProgressBar";

import Hesebdari from "../Hesebdari/Hesebdari";
import Power from "../Power/Power";
import Conversation from "../Conversation/Conversation";
import Application from "../Application/Application";
import Site from "../Site/Site";

export default function ServicesContainer() {
  const [selected, setSelected] = useState(0);
  const [previousSelected, setPreviousSelected] = useState(0);
  const swiperElRef = useRef(null);
  const data = ServicesData;
  const [autoChange, setAutoChange] = useState(true);
  const duration = 3000;
  const speed = 500;

  useEffect(() => {
    let interval;

    if (autoChange) {
      interval = setInterval(() => {
        setPreviousSelected(selected);
        setSelected((prevSelected) => (prevSelected + 1) % data.length);
      }, duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoChange, data, selected]);

  useEffect(() => {
    let swiper = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: speed,
        spaceBetween: 0,
        slidesPerView: 1,
      });
    }
    if (swiper) {
      const difference = selected - previousSelected;
      if (difference > 0) {
        swiper.changeLanguageDirection("rtl");
      } else {
        swiper.changeLanguageDirection("ltr");
      }
      swiper.slideTo(selected + 1, speed);
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, [selected, previousSelected]);

  function manualClick(idx) {
    setPreviousSelected(selected);
    setSelected(idx);
  }

  return (
    <div>
      <div className="mt-[100px] p-[3vw] mx-auto bg-[#F5F8FC]">
        <p className="text-[18px] font-[300] text-grayed mb-[40px]">
          یک پلتفرم برای تمامی نیاز ها
        </p>
        <h2 className="text-[40px] font-[800]">خدمات ما در متانکست</h2>
        <div className="flex">
          {data.map((ele, idx) => (
            <div
              key={idx}
              onClick={() => manualClick(idx)}
              className="cursor-pointer w-[100vw] mr-[20px]"
            >
              <img
                className="cursor-pointer mt-[50px] w-[60px] h-[60px]"
                src={selected === idx ? ele.image2 : ele.image1}
                alt=""
              />
              <p className={` ${selected === idx ? "font-[700] " : "text-[#7E8AAB]"} my-[15px] text-[20px] `}>{ele.text}</p>
              <ProgressBar
                duration={duration}
                selectedIdx={selected}
                idx={idx}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 flex items-center justify-between bg-[#F5F8C] mb-[30px] flex-row-reverse">
        <div className="swiper-container overflow-hidden" ref={swiperElRef}>
          <div className="swiper-wrapper">
          <div className="swiper-slide">
              <Hesebdari />
            </div>
              <div className="swiper-slide">
              <Hesebdari />
            </div>
            <div className="swiper-slide">
              <Power />
            </div>
            <div className="swiper-slide">
              <Conversation/>
            </div>
            <div className="swiper-slide">
              <Application/>
            </div>
            <div className="swiper-slide">
              <Site/>
            </div>
              </div>
        </div>
      </div>
    </div>
  );
}
