// SlideCompo.js
import React from "react";
import { useRecoilValue } from "recoil";
import { slideArrState } from "../../RecoilState/RecoilState"; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید

export default function SlideCompo() {
  const slideArr = useRecoilValue(slideArrState);

  return (
    <>
      <div className="alllll rounded-3xl  w-[430px] h-[527px]  bg-[#F5F8FC]">
        <div className="head flex items-end justify-center gap-[150px]">
          <div className="headRight mt-[30px] ">
            <img src={slideArr.srcImgArr} alt="" className="mb-[10px]" />
            <img src={slideArr.srcImgPerc} alt="" />
          </div>
          <div
            className={`textLeft ${slideArr.styleBg}  p-[10px] rounded-[5px]`}
          >
            <span className={`${slideArr.textColor}`}>افزایش سود مشتری</span>
          </div>
        </div>

        <div className="text w-[380px] mr-[28px]">
          <h1 className="text-[30px] font-bold mt-[35px]">آقای علیرضا رودی</h1>
          <p className="text-[#0CA0A2] text-[20px] mt-[5px]">مدیر عامل ترناو</p>
          <p className="text-[#626E94] text-[18px] mt-[10px]">
            لورم ایپسوم متن ساختگی با تولید سادگی...
          </p>
        </div>

        <div className="videoSec mr-[28px] mt-[35px]">
          <img src={slideArr.srcImgVideo} alt="" />
        </div>
      </div>
    </>
  );
}
