import React from "react";
import { useRecoilValue } from 'recoil';
import { prosState } from '../../RecoilState/RecoilState'; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید
import Pros from "../Pros/Pros";

export default function Proses() {
  const prosList = useRecoilValue(prosState);

  return (
    <>
      <div className="flex flex-wrap justify-center  gap-10 mt-[200px]">
        {prosList.map((pro, index) => (
          <Pros
            key={index}
            title={pro.title}
            parag={pro.parag}
            srcpic={pro.srcpic}
          />
        ))}
      </div>
    </>
  );
}
