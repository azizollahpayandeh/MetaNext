import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="allNavBar   ">
        <div className="NavBar flex justify-around items-center mt-[30px]">
          <div className="metanext flex cursor-pointer">
            <img src="./Images/logo.png" alt="" className="w-[50px] h-[54px]" />
            <div className="nextLogo mr-[10px]">
              <h1 className="text-2xl font-bold">متانکست</h1>
              <p className="opacity-50 text-sm mt-[2px]">
                جایگاه خود را بهتر کنید
              </p>
            </div>
          </div>

          <div className="allLi">
            <ul className="flex gap-10">
              <li className="text-sm opacity-60 font-medium text-[#0CA0A2] cursor-pointer  hover:scale-[1.1] transition-all duration-700">صفحه اصلی</li>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer   hover:scale-[1.1] transition-all duration-700">
                <li className="text-sm opacity-60 font-medium  ">سرویس ها</li>
                <select name="" id=""  className="mt-[-3px]"></select>
              </div>
              <li className="text-sm opacity-60 font-medium hover:text-[#0CA0A2]  cursor-pointer  hover:scale-[1.1] transition-all duration-700">قیمت ها</li>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer   hover:scale-[1.1] transition-all duration-700">
                <li className="text-sm opacity-60 font-medium  ">بلاگ متانکست</li>
                <select name="" id="" className="mt-[-3px]"></select>
              </div>
              <div className="flex hover:text-[#0CA0A2]   hover:scale-[1.1] transition-all duration-700 cursor-pointer">
                <li className="text-sm opacity-60 font-medium  ">لینک های مفید</li>
                <select name="" id="" className="mt-[-3px]"></select>
              </div>
            </ul>
          </div>

            <div className="flex gap-8 items-center">

          <div className="concat us flex ">
            <img src="./Images/Group 34738.svg" alt="" className="w-[25px]" />
            <div className="mr-[6px]">
              <p className="opacity-40 text-sm">تماس با ما</p>
              <h1 className="font-semibold text-[13px]">09152663045</h1>
            </div>
          </div>

          <button className="flex shadow-xl bg-[#0CA0A2] rounded-[10px] w-[137px] h-[56px] items-center justify-center  hover:scale-[1.2] transition-all duration-700">
            <img src="./Images/presention-chart.svg" alt="" className="w-[17px]" />
            <p className="text-sm text-white mr-[5px]">دمو رایگان</p>
          </button>

          <div className="language flex gap-1 cursor-pointer  ">
          <select name="" id="" className="text-lg">
            </select>
            <p className="text-lg ">En</p>
            <img src="./Images/language.png" alt="" className="w-[23px] h-[23px]"/>

          </div>
          </div>

        </div>
      </div>
    </>
  );
}
