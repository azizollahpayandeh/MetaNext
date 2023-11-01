import React from "react";
import "./CallUS";
export default function CallUS() {
  return (
    <>
      <div className="relative">
        <div className="vector2-opacityy">
          <div className="bg-[#1f1e1e] text-white flex justify-between items-center w-[100%] h-[140px]">
            <div className="flex items-center mr-[30px] ">
              <img
                src="./Images/Group 34738.png"
                alt=""
                className="w-[50px] h-[50px] mr-[20px]"
              />
              <div className="titleTextConcat mr-[20px]">
                <h1 className="text-[34px] font-[800] ">
                  دریافت <span className="text-[#0CA0A2]">مشاوره رایگان</span>
                </h1>
                <p className="text-[15px] text-[#626E94] font-[400] mt-[10px]">
                  در تمامی روز های هفته 24 ساعته در خدمتیم
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-[700] text-[40px]  ml-[40px]">09152663045</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
