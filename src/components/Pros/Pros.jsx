import React from "react";

export default function Pros({ parag, title, srcpic }) {
  return (
    <>
      <div className="all">
        <div className="pros flex justify-center items-center gap-5 w-[570px] h-[200px] bg-[#F5F8FC] rounded-2xl hover:bg-[#3959F81A] hover:border-[#5164c11a] hover:border-solid  hover:border-[4px] ">
          <img src={srcpic} alt="" className="max-w-[150px] max-h-[120px]" />
          <div className="Text ">
            <h1 className="text-[26px] font-[700]">{title}</h1>
            <p className="text-[16px] mt-[15px] text-[#626E94] w-[360px] font-[400]">
              {parag}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
