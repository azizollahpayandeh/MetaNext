import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="allNavBar  relative  ">
          <img src="./Images/Vector 31.png" alt=""  className="absolute top-[60px] right-[370px]"/>
          <img src="./Images/Group 34771.png" alt="" className="absolute top-[180px] right-[0]" />
          <img src="./Images/Ellipse 361.png" alt="" className="absolute top-[100px] right-[1360px] w-[8px]" />
          <img src="./Images/Ellipse 361.png" alt="" className="absolute top-[130px] right-[400px]" />
          <img src="./Images/Ellipse 362.png" alt="" className="absolute top-[250px] right-[170px]" />
          <img src="./Images/Ellipse 363.png" alt="" className="absolute top-[160px] right-[1150px]" />
          <img src="./Images/Vector22.png" alt="" className="absolute top-[310px] right-[1320px]" />
          <img src="./Images/Vector33.png" alt="" className="absolute top-[400px] w-[190px] right-[590px]" />

        <div className="NavBar flex justify-around items-center mt-[30px]">
          <div className="metanext flex cursor-pointer">
            <img src="./Images/logo.png" alt="" className="w-[50px] h-[54px]" />
            <div className="nextLogo mr-[10px]">
              <h1 className="text-[27px] font-[800]">متانکست</h1>
              <p className=" text-[16px] font-[300] text-[#7E8AAB] mt-[2px]">
                جایگاه خود را بهتر کنید
              </p>
            </div>
          </div>

          <div className="allLi">
            <ul className="flex gap-10">
              <li className="text-[16px] font-[500] text-[#0CA0A2] cursor-pointer   transition-all duration-700">
                صفحه اصلی
              </li>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer    transition-all duration-700">
                <li className="text-[16px] font-[500] text-[#626E94] ">
                  سرویس ها
                </li>
                <select name="" id="" className="mt-[-3px]"></select>
              </div>
              <li className="text-sm  font-medium hover:text-[#0CA0A2]  cursor-pointer   transition-all duration-700">
                قیمت ها
              </li>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer    transition-all duration-700">
                <li className="text-[16px] font-[500]  text-[#626E94]">
                  بلاگ متانکست
                </li>
                <select name="" id="" className="mt-[-3px]"></select>
              </div>
              <div className="flex hover:text-[#0CA0A2]    transition-all duration-700 cursor-pointer">
                <li className="text-[16px] font-[500] text-[#626E94] ">
                  لینک های مفید
                </li>
                <select name="" id="" className="mt-[-3px]"></select>
              </div>
            </ul>
          </div>

          <div className="flex gap-8 items-center">
            <div className="concat us flex ">
              <img src="./Images/Group 34738.svg" alt="" className="w-[25px]" />
              <div className="mr-[6px]">
                <p className=" font-[300] text-[16px] text-[#7E8AAB]">
                  تماس با ما
                </p>
                <h1 className="font-[600] text-[18px]">۰۹١۵۲۶۶۳۰۴۵</h1>
              </div>
            </div>

            <button className="flex shadow-lg bg-[#0CA0A2] rounded-[10px] w-[137px] h-[56px] items-center justify-center  transition-all duration-700">
              <img
                src="./Images/presention-chart.svg"
                alt=""
                className="w-[17px]"
              />
              <p className="text-[17px] font-[500] text-white mr-[5px]">
                دمو رایگان
              </p>
            </button>

            <div className="language flex gap-1 cursor-pointer  ">
              <select name="" id="" className="text-lg text-[#626E94]"></select>
              <p className="text-[21px] font-[400] text-[#626E94] ">En</p>
              <img
                src="./Images/language.png"
                alt=""
                className="w-[23px] h-[23px] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
