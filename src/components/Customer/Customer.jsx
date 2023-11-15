import React from "react";
import { useRecoilValue } from 'recoil';
import { customerImagesState } from '../../RecoilState/RecoilState'; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید

export default function Customer() {
  const customerImages = useRecoilValue(customerImagesState);

  return (
    <div className="all text-center mt-[150px]">
      <p className="text-[#626E94] text-[18px] opacity-80">
        از این که به ما اعتماد کردین خوشحالیم
      </p>
      <h1 className="text-[40px] text-[#000000] mt-[30px] font-bold">
        گوشه ای از مشتریان متانکست
      </h1>
      <img src={customerImages} alt="" />
    </div>
  );
}
