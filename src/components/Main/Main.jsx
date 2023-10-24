import React from "react";

export default function Main() {
  return (
    <>
      <div className="all">
        <div className="allTex... flex flex-col  items-center text-center relative mt-[50px]">
          <img src="./Images/Vector.png" alt="" className="w-[31px] h-[17px]" />    

          <div className="Main flex flex-col ">
            <div className="flex justify-center ">
                <p className="text-[24px] opacity-70">سیستم</p>
                <p className="text-[24px] font-semibold">
                    CRM
                </p>
                <h1 className="text-[24px] opacity-70">متانکست</h1>

            </div>
            <div className="big mt-[18px]">
              <h1 className="text-[46px] font-bold" >یک پلتفرم برای تمامی نیاز ها کسب و کار</h1>
            </div>

            <p className="opacity-60 w-[1212px] h-[120px] text-[17px] leading-[35px] mt-[30px] ">
              سی ار ام یک سیستم نرم افزاری است که به صاحبان کسب و کار کمک میکند
              تا به راحتی تمام ارتباطات را ردیابی کند و روابط را با سرنخ ها وت
              مشتریان خود تقویت کند.سی ار ام جایگزین تعداد زیادی از صفحات گسترده
              ، پایگاه های داده و برنامه هایی است که بسیاری از کسب و کار ها برای
              ردیابی داده های مشتری با هم وصله میکنند.نتیجه: سازماندهی ، کارایی
              ، مدیریت زمان بهتر
            </p>
          </div>

          <div className="btn mt-[50px] flex items-center">
            <img src="./Images/Vector 33.png" alt=""  className="w-[150px] h-[12px] ml-[20px]"/>
            <button className="w-[257px] h-[67px] bg-[#011627]   hover:scale-[1.1] transition-all duration-700 rounded-[10px] text-white flex justify-center items-center text-opacity-90 ">رایگان شروع کنید<img src="./Images/arrow-left.png" alt="" className="w-[19px]  mt-[5px] mr-[5px]" /></button>
            <img src="./Images/Vector 32 (1).png" alt="" className="w-[150px] h-[12px] mr-[20px]" />
            
          </div>

          <div className="Meta mt-[50px]">
            <img src="./Images/Meta.png" alt="" />
          </div>
        </div> 
      </div>
    </>
  );
}
