import React from "react";

export default function Conversation() {
  const imageList22 = [
    {
      src: "./Images/Group 70223.png",
      alt: "",
      top: "-50px",
      right: "425px",
    },
    {
      src: "./Images/Group 70224.png",
      alt: "",
      top: "-50px",
      right: "50px",
    },
    {
      src: "./Images/Group 70222.png",
      alt: "",
      top: "300px",
      right: "200px",
    },
  ];
  return (
    <>
      <div className="system flex justify-between mt-[100px] mr-[50px]">
        <div className="w-[620px] h-[370px]">
          <h1 className="text-[40px] font-[800] mb-[20px]">
            سیستم گفتوگو با مشتری
          </h1>
          <p className="text-[18px] text-[#626E94] leading-[45px] font-[400]">
            ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت بالا
            و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به سرعت
            بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در بازار
            کسب و کار کمک بسزایی کند.
          </p>
          <div className="memebers flex justify-between items-center mt-[40px]">
            <img
              src="./Images/right11.png"
              alt=""
              className="w-[300px] h-[110px] rounded-[20px]"
            />
            <div className="flex gap-[100px] ">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-[#0CA0A2]  text-[30px] font-[800]">۴۵۰+</h1>
                <p className="text-[#0CA0A2] text-[14px]">خرید محصول</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-[#011627] text-[30px] font-semibold">
                  ۳۲۰+
                </h1>
                <p className="text-[14px]">کاربر فعال</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
          <img src="./Images/Product views.png" alt="" className="mt-[-10px]" />
        </div>
      </div>

      <div className="Why w-[620px] h-[350px] mr-[50px] ">
        <h1 className="text-[34px] font-[700] mb-[20px]">
          چرا باید از سیستم متانکست استفاده کنیم
        </h1>
        <p className="text-[18px] text-[#626E94] font-[400] leading-[45px]">
          ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت بالا و
          حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به سرعت
          بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در بازار کسب
          و کار کمک بسزایی کند.
        </p>
      </div>

      <div className="alll flex justify-around">
        <div className="Why w-[620px] h-[370px]  ">
          <h1 className="text-[34px] font-[700] mb-[20px]">
            امکانات موجود در سیستم حسابداری
          </h1>
          <p className="text-[18px] text-[#626E94] leading-[45px] font-[400]">
            سیستم کامل مالی، سیستم کامل خزانه ، و سیستم کامل انبار که شامل ثبت
            چک ها ، ثبت فاکتور های خرید و فروش ، نگهداری سوابق خرید و فروش ،
            نگهداری سوابق مشتری ، حساب های بانکی و صندوق ، گردش موجودی کالا ،
            حواله حساب ، صورتحساب سود و زیان ، تراز نامه ، اتصال به دستگاه پوز ،
            ثبت فاکتور های درامد و هزینه میشوند.
          </p>
          <button className="w-[220px] h-[63px] mt-[25px] bg-[#0CA0A2]    rounded-[10px] text-white flex justify-center items-center text-[18px] font-[500] ">
            اطلاعات بیشتر{" "}
            <img
              src="./Images/arrow-left.png"
              alt=""
              className="w-[23px]  mt-[5px] mr-[5px]"
            />
          </button>
        </div>

        <div className="imgbox mt-[-200px] relative">
          <img
            src="./Images\Pro tips.png"
            alt=""
            className="mt-[-30px] rounded-xl"
          />

          {imageList22.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-[154px] h-[181px] absolute  cursor-pointer transition-all duration-700"
              style={{ top: image.top, right: image.right }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
