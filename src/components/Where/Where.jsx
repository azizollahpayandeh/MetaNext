import React from "react";

export default function Where() {
  return (
    <>
      <div className="all flex justify-around mt-[50px]">
        <div className="right w-[700px] h-[372px] font-bold mt-[70px]">
          <h1 className="text-[34px]  text-[#011627] ">
            در هر کجایی دنیا که هستی کسب و کارت رو آنلاین مدیریت کن
          </h1>
          <p className="text-[18px] text-[#7E8AAB] leading-[40px] mt-[30px] opacity-80">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربر
          </p>
          <button className="w-[220px] h-[63px] mt-[30px] bg-[#8239F8]   hover:scale-[1.1] transition-all duration-700 rounded-[10px] text-white flex justify-center items-center text-opacity-90 ">
          دریافت مشاوره رایگان

          </button>

        </div>
        <div className="left">
                <img src="./Images/Group 70200.png" alt="" />
          </div>
      </div>
    </>
  );
}
