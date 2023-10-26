import React, { useState } from "react";
import Hesebdari from "../Hesebdari/Hesebdari";
import Power from "../Power/Power";
import Conversation from "../Conversation/Conversation";
import Application from "../Application/Application";
import Site from "../Site/Site";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function OptionLink() {
  const [isBlock, setIsBlock] = useState("hesabdari");

  return (
    <>
      <div className="service mr-[30px]  mt-[40px]    ">
        <div className="text">
          <p className="text-[18px] opacity-50  ">
            یک پلتفرم برای تمامی نیاز ها
          </p>
          <h1 className="text-[40px] font-semibold mt-[20px]">
            خدمات ما در متانکست
          </h1>
        </div>
        <div className="options flex gap-[25px] mt-[40px]  mb-[50px] ">
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
            <img
              src={
                isBlock === "hesabdari"
                  ? "./Images/Group 34792.png"
                  : "./Images/Group 34793.png"
              }
              alt=""
              className="mt-[15px] 
transition-all duration-700 ease-in-out"
            />
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
            <img
              src={
                isBlock === "power"
                  ? "./Images/Group 34792.png"
                  : "./Images/Group 34793.png"
              }
              alt=""
              className="mt-[15px]"
            />
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
            <img
              src={
                isBlock === "convertion"
                  ? "./Images/Group 34792.png"
                  : "./Images/Group 34793.png"
              }
              alt=""
              className="mt-[15px]"
            />
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
            <img
              src={
                isBlock === "aplication"
                  ? "./Images/Group 34792.png"
                  : "./Images/Group 34793.png"
              }
              alt=""
              className="mt-[15px]"
            />
          </div>

          <div
            className="box cursor-pointer "
            onClick={() => {
              setIsBlock("site");
            }}
          >
            <img
              src={
                isBlock === "site" ? "./Images/2.png" : "./Images/Group34.png"
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
            <img
              src={
                isBlock === "site"
                  ? "./Images/Group 34792.png"
                  : "./Images/Group 34793.png"
              }
              alt=""
              className="mt-[15px]"
            />
          </div>
        </div>
        <div className="allllllll main meeeeeeeee">
          {isBlock === "hesabdari" ? <Hesebdari /> : ""}
          {isBlock === "power" ? <Power /> : ""}
          {isBlock === "convertion" ? <Conversation /> : ""}
          {isBlock === "aplication" ? <Application /> : ""}
          {isBlock === "site" ? <Site /> : ""}
        </div>
      </div>
    </>
  );
}
