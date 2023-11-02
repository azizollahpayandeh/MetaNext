import React from "react";
import { Input } from "antd";

export default function Concat() {
  const { TextArea } = Input;
  return (
    <>
      <div className="alll relative ">
        <img
          src="./Images/Ellipse 392.png"
          alt=""
          className="absolute top-[20px] right-[500px]"
        />
        <img
          src="./Images/Star 6.png"
          alt=""
          className="absolute top-[180px] right-[50px]"
        />
        <img
          src="./Images/Ellipse 393.png"
          alt=""
          className="absolute top-[670px] right-[650px]"
        />
        <img
          src="./Images/Polygon 6.png"
          alt=""
          className="absolute top-[670px]  right-[50px]"
        />

        <div className="alllla again flex justify-between items-center mt-[50px] ">
          <div className="right  mx-auto ">
            <img
              src="./Images/Frame.png"
              alt=""
              className="mt-[-70px] h-[600px] mr-[-20px]"
            />
          </div>
          <div className="left w-[550px] m-[50px]  h-[650px] flex flex-col gap-[50px] rounded-3xl bg-[#e1f8f6] ">
            <div className="flex items-center mt-[25px]">
              <img
                src="./Images/Group 34738.png"
                alt=""
                className="w-[50px] h-[50px] mr-[20px]"
              />
              <div className="titleTextConcat mr-[20px]">
                <p className="text-[16px] font-[300] text-[#626E94]">
                  همراه شما هستیم برای یک شروع تازه
                </p>
                <h1 className="text-[34px] font-[700]  mt-[10px]">
                  دریافت <span className="text-[#0CA0A2]">مشاوره رایگان</span>
                </h1>
              </div>
            </div>
            <div className="imputes text-center mt-[-20px]">
              <Input
                size="large"
                placeholder="نام و نام حانوادگی"
                // prefix={<UserOutlined />}
                className="w-[480px] h-[55px] text-[17px] font-[400] text-[#1E385F]"
              />
              <br />
              <br />
              <Input
                placeholder="شماره تماس"
                size="large"
                className="w-[480px] h-[55px] text-[17px] font-[400] text-[#1E385F]"
              />
              <br />
              <br />
              <Input
                size="large"
                className="w-[480px] h-[55px] text-[17px] font-[400] text-[#1E385F]"
                placeholder="نام شرکت"
                // prefix={<UserOutlined />}
              />
              <br />
              <br />
              <TextArea
                placeholder="موضوع "
                autoSize={{ minRows: 5, maxRows: 7 }}
                className="w-[480px] text-[17px] font-[400] text-[#1E385F]"
              />
            </div>
            <div className="flex justify-center mt-[-15px]">
              <button className="flex  shadow-xl bg-[#0CA0A2] rounded-[10px] w-[480px] h-[56px] items-center justify-center ">
                <p className="text-[15px] font-[500] text-white mr-[5px] ">
                  دریافت مشاوره{" "}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
