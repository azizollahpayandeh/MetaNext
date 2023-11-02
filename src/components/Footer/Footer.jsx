import React from "react";

export default function Footer() {
  return (
    <>
      <div className="all">
        <div className="alll2 mt-[50px] ">
          <div className="headeoffooter flex justify-between container ">
            <div className="right mr-[50px] flex items-center cursor-pointer">
              <img
                src="./Images/logo.png"
                alt=""
                className="w-[50px] h-[54px]"
              />
              <div className="nextLogo mr-[10px]">
                <h1 className="text-[38px] font-[800]">متانکست</h1>
                <p className="font-[400] text-[#7E8AAB] text-[22px]">
                  جایگاه خود را بهتر کنید
                </p>
              </div>
            </div>

            <div className="left flex gap-10 ">
              <img
                src="./Images/Group 70195.png"
                alt=""
                className="h-[80px]  cursor-pointer"
              />
              <img
                src="./Images/Group 70196.png"
                alt=""
                className="h-[80px]  cursor-pointer"
              />
              <img
                src="./Images/Group 70197.png"
                alt=""
                className="h-[80px]  cursor-pointer"
              />
              <img
                src="./Images/Group 70198.png"
                alt=""
                className="h-[80px]  cursor-pointer"
              />
            </div>
          </div>

          <div className="alllTable flex justify-around mt-[100px] ">
            <div className="flex flex-col gap-[33px]">
              <h1 className="text-[26px] text-[#000] font-[800] mb-[20px]">
                متانکست
              </h1>
              <div className="flex gap-3 items-center ">
                <img
                  src="./Images/Vector 622.png"
                  alt=""
                  className=" h-[2px]"
                />
                <p className="text-[#0CA0A2] font-[500] text-[16px] cursor-pointer">
                  صفحه اصلی{" "}
                </p>
              </div>
              <p className="text-[#7E8AAB] font-[500] text-[16px] cursor-pointer">
                {" "}
                قیمت ها
              </p>
              <p className="text-[#7E8AAB] font-[500] text-[16px] cursor-pointer">
                {" "}
                خدمات
              </p>
              <p className="text-[#7E8AAB] font-[500] text-[16px] cursor-pointer">
                {" "}
                بلاگ
              </p>
              <p className="text-[#7E8AAB] font-[500] text-[16px] cursor-pointer">
                {" "}
                درباره ما
              </p>
            </div>

            <div className="flex flex-col gap-[25px]">
              <h1 className="text-[26px] font-[800] text-[#000]  mb-[20px]">
                خدمات ما
              </h1>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202.png" alt="" />
                <p className="text-[#7E8AAB] text-[18px] font-[400] cursor-pointer">
                  {" "}
                  حسابداری آنلاین
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (1).png" alt="" />
                <p className="text-[#7E8AAB] text-[18px] font-[400] cursor-pointer">
                  {" "}
                  مدیریت نیروی کار
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (2).png" alt="" />
                <p className="text-[#7E8AAB] text-[18px] font-[400] cursor-pointer">
                  {" "}
                  گفتوگو با مشتریان
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (3).png" alt="" />
                <p className="text-[#7E8AAB] text-[18px] font-[400] cursor-pointer">
                  {" "}
                  اپلیکیشن فروشگاهی{" "}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (4).png" alt="" />
                <p className="text-[#7E8AAB] text-[18px] font-[400] cursor-pointer">
                  {" "}
                  سایت فروش{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[28px]">
              <h1 className="text-[26px] text-[#000] font-[800] mb-[20px]">
                خدمات مشتریان
              </h1>
              <p className="text-[#7E8AAB] text-[17px] font-[400 font-[500]] cursor-pointer">
                {" "}
                تماس با ما{" "}
              </p>
              <p className="text-[#7E8AAB] text-[17px] font-[400 font-[500]] cursor-pointer">
                {" "}
                سوالات متداول
              </p>
              <p className="text-[#7E8AAB] text-[17px] font-[400 font-[500]] cursor-pointer">
                {" "}
                همکاری در فروش
              </p>
            </div>

            <div className="flex flex-col gap-[35px]">
              <h1 className="text-[26px] text-[#000] font-[800] mb-[20px]">
                راه های ارتباطی
              </h1>
              <div className="flex gap-4">
                <img
                  src="./Images/location33.png"
                  alt=""
                  className="h-[18px] w-[18px]"
                />
                <p className="text-[#7E8AAB] font-[400] text-[15px] mr-[-8px] cursor-pointer">
                  {" "}
                  آدرس
                </p>
              </div>
              <p className=" text-[16px]  font-[400] text-[#011627] cursor-pointer">
                {" "}
                مشهد بابانظر 77 ، عزیزی 3، پلاک 8
              </p>
              <div className="flex gap-4">
                <img
                  src="./Images/Calling11.png"
                  alt=""
                  className="h-[18px] w-[18px]"
                />
                <p className="text-[#7E8AAB] font-[400] text-[15px] mr-[-8px] cursor-pointer">
                  {" "}
                  شماره تماس{" "}
                </p>
                <span className="font-[700] text-[14] text-[#011627 ] cursor-pointer">
                  02136160800
                </span>
              </div>
              <div className="./images/Message.png">
                <div className="flex gap-4">
                  <img
                    src="./Images/Message22.png"
                    alt=""
                    className="h-[18px] w-[18px]"
                  />
                  <p className="text-[#7E8AAB] font-[400] text-[15px] mr-[-8px] cursor-pointer">
                    {" "}
                    ایمیل{" "}
                  </p>
                  <p className="font-[700] text-[14px] cursor-pointer">
                    Metanext.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <img
                src="./Images/Logo1.png"
                alt=""
                className="w-[120px] h-[140px] mt-[50px] ml-[30px] "
              />
            </div>
          </div>
          <div className="relative">
            <div className="demo bg-[#0CA0A2] mask flex justify-between  items-center xl:w-[1300px] 2xl:w-[1630px] h-[123px] rounded-3xl mr-[40px] mt-[80px] mb-[30px]">
              <h1 className="text-[32px] text-[#fff] font-bold mr-[50px] ">
                دریافت دمو رایگان
              </h1>

              <button className="flex shadow-xl ml-[50px]  bg-[#ffff]  rounded-[10px] w-[227px] h-[76px] items-center justify-center cursor-pointer  ">
                <img
                  src="./Images/presention-chart.png"
                  alt=""
                  className="w-[20px] ml-[5px] text-[#0CA0A2]  "
                />
                <p className="text-[18px] font-[500] text-[#0CA0A2]   ">
                  دمو رایگان
                </p>
              </button>
            </div>
          </div>

          <div className="flex justify-between xl:w-[1290px] 2xl:w-[1610px] text-[#626E94] h-[23px] mr-[50px] mb-[30px]">
            <p className=" text-[14px] font-[600]">
              تمامی حقوق مادی و معنوی این سایت نزد متانکست محفوظ است و هر گونه
              کپی برداری پیگرد قانونی دارد
            </p>
            <p className=" text-[16px] font-[500] ">1400-1401</p>
          </div>
        </div>
      </div>
    </>
  );
}
