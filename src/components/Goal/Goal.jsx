import React from "react";
import Options from "../Options/Options";

export default function   Goal() {
  return (
    <>
      <div className="all">
        <div className="vector2-opacity mb-[150px] relative mx-auto w-[555px] h-[718px] rounded-[120px] bg-[#0CA0A2]   mt-[100px] flex flex-col gap-10 items-center justify-center">
          <div className="">
            <h1 className="text-white text-[46px] text-center font-[800] mb-[25px]">هدف ما در متانکست</h1>
            <img src="./Images/Group.png" alt="" className="mx-auto mb-[35px] reduced-opacity" />
            <p className="w-[460px] h-[410px] text-center text-white leading-[45px] text-[18px] font-[400] opacity-90 ">
              یک استراتژی در پروسه ی بازاریابی کسب وکار است که تمام نظام و
              فعالیت های موجود در سازمان را حول محور مشتری یکپارچه میسازد.در این
              نرم افزار شما به عنوان مدیر فروش میتوانید با برنامه ریزی و زمان
              بندی و پیش بینی فروش کسب و کار خود را به درجه ی بالای کیفی
              برسانید. نرم افزار های سی ار ام که با تجزیه و تحلیل اطلاعات شرکت
              شما جز نرم افزار های هوش تجاری نیز شناخته میشود با هدف توانمند
              کردن سازمان شما جهت ایجاد ارتباط و تعامل با مشتری – ترغیب – گسترش
              – حفظ و ارایه خدمات بهتر به مشتریان در راضی نگه داشتن و وفادار
              سازی مشتری نقش مهمی ایفا میکند.
            </p>
          </div>

          <div className="cart absolute top-[-10px] left-[-150px]">
            <Options
              title=" افزایش میزان روابط  مشتریان"
              srcimg="./Images/Frame 34770 (1).png"
              width="500px"
            />
          </div>
          <div className="absolute top-[450px] left-[470px]">
            <Options
              title="افزایش  رضایت مشتریان"
              srcimg="./Images/Frame 34770 (2).png"
              width="350px"
            />
          </div>

          <div className="absolute top-[200px] left-[500px]">
            <Options
              title="افزایش سود فروش"
              srcimg="./Images/Frame 34770.png"
              width="300px"
            />
          </div>

          <div className="absolute top-[450px] left-[-300px]">
            <Options
              title="افزایش درامد حاصل از فروش"
              srcimg="./Images/Frame 34770 (3).png"
              width="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
