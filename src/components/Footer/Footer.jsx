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
                <h1 className="text-[40px] font-bold">متانکست</h1>
                <p className="opacity-50 text-[24px]">
                  جایگاه خود را بهتر کنید
                </p>
              </div>
            </div>

            <div className="left flex gap-10">
              <img src="./Images/Group 70195.png" alt="" />
              <img src="./Images/Group 70196.png" alt="" />
              <img src="./Images/Group 70197.png" alt="" />
              <img src="./Images/Group 70198.png" alt="" />
            </div>
          </div>

          <div className="alllTable flex justify-around mt-[100px] ">
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[30px] text-[#000] font-semibold mb-[20px]">
                متانکست
              </h1>
              <div className="flex gap-3 items-center ">
                <img
                  src="./Images/Vector 622.png"
                  alt=""
                  className=" h-[2px]"
                />
                <p className="text-[#0CA0A2] text-[16px]">صفحه اصلی </p>
              </div>
              <p className="text-[#7E8AAB] text-[16px]"> قیمت ها</p>
              <p className="text-[#7E8AAB] text-[16px]"> خدمات</p>
              <p className="text-[#7E8AAB] text-[16px]"> بلاگ</p>
              <p className="text-[#7E8AAB] text-[16px]"> درباره ما</p>
            </div>

            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[30px] text-[#000] font-semibold mb-[20px]">
                خدمات ما
              </h1>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202.png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]"> حسابداری آنلاین</p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (1).png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]"> مدیریت نیروی کار</p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (2).png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]"> گفتوگو با مشتریان</p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (3).png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]">
                  {" "}
                  اپلیکیشن فروشگاهی{" "}
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img src="./Images/Group 70202 (4).png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]"> سایت فروش </p>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[30px] text-[#000] font-semibold mb-[20px]">
                خدمات مشتریان
              </h1>
              <p className="text-[#7E8AAB] text-[16px]"> تماس با ما </p>
              <p className="text-[#7E8AAB] text-[16px]"> سوالات متداول</p>
              <p className="text-[#7E8AAB] text-[16px]"> همکاری در فروش</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[30px] text-[#000] font-semibold mb-[20px]">
                راه های ارتباطی
              </h1>
              <div className="flex">
                <img src="./Images/location.png" alt="" className="" />
                <p className="text-[#7E8AAB] text-[16px]"> آدرس</p>
              </div>
              <p className=" text-[16px] opacity-90 font-semibold">
                {" "}
                مشهد بابانظر 77 ، عزیزی 3، پلاک 8
              </p>
              <div className="flex gap-4">
                <img src="./Images/Message.png" alt="" />
                <p className="text-[#7E8AAB] text-[16px]"> شماره تماس </p>
                <span className="font-semibold">02136160800</span>
              </div>
              <div className="./images/Message.png">
                <div className="flex gap-4">
                  <img
                    src="./Images/Group 34738.png"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <p className="text-[#7E8AAB] text-[16px]"> ایمیل </p>
                  <p className="font-semibold">Metanext.com</p>
                </div>
              </div>
            </div>

            <div className="flex">
              <img
                src="./Images/Logo1.png"
                alt=""
                className="w-[120px] h-[150px] mt-[50px] ml-[30px]"
              />
            </div>
          </div>
          <div className="demo bg-[#0CA0A2] flex justify-between  items-center w-[1300px] h-[123px] rounded-3xl mr-[40px] mt-[80px] mb-[20px]" >
            <h1 className="text-[32px] text-[#fff] font-bold mr-[50px] ">دریافت دمو رایگان</h1>

            <button className="flex shadow-xl ml-[50px] bg-[#ffff]  rounded-[10px] w-[227px] h-[76px] items-center justify-center  ">
              <img
                src="./Images/presention-chart.svg"
                alt=""
                className="w-[17px] text-[#0CA0A2]  "
                />
              <p className="text-sm text-[#0CA0A2] ">دمو رایگان</p>
            </button>
          </div>
          <div className="flex justify-between w-[1300px] h-[23px] mr-[50px] mb-[20px]">
            <p className="opacity-60 text-[16px] ">تمامی حقوق مادی و معنوی این سایت نزد متانکست محفوظ است و هر گونه کپی برداری پیگرد قانونی دارد</p>
            <p className="opacity-60 text-[16px] ">1400-1401</p>
          </div>
        </div>
      </div>
    </>
  );
}
