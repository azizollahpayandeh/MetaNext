import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  languageState,
  AllImagesOfNavAbsu,
} from "../../RecoilState/RecoilState"; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید

export default function NavBar() {
  const [language, setLanguage] = useRecoilState(languageState);
  const [AllImagesOfNav, setAllImagesOfNavAbsu] =
    useRecoilState(AllImagesOfNavAbsu);

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="allNavBar  relative  ">
        {AllImagesOfNav.map((AllImages) => {
          <img
            src={AllImages.src}
            alt={AllImages.alt}
            className={AllImages.className}
          />;
        })}

        <div className="NavBar flex justify-around items-center mt-[30px]">
          <Link to="/">
            <div className="metanext flex cursor-pointer">
              <img
                src="./Images/logo.png"
                alt=""
                className="w-[50px] h-[54px]"
              />
              <div className="nextLogo mr-[10px]">
                <h1 className="text-[27px] font-[800]">متانکست</h1>
                <p className=" text-[16px] font-[300] text-[#7E8AAB] mt-[2px]">
                  جایگاه خود را بهتر کنید
                </p>
              </div>
            </div>
          </Link>

          <div className="allLi">
            <ul className="flex gap-10">
              <Link to="/">
                <li className="text-[16px] font-[500] text-[#0CA0A2] cursor-pointer   transition-all duration-700">
                  صفحه اصلی
                </li>
              </Link>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer    transition-all duration-700">
                <li className="text-[16px] font-[500] text-[#626E94] ">
                  سرویس ها
                </li>
                <select
                  name=""
                  id=""
                  className="mt-[-3px] text-[#626E94]"
                ></select>
              </div>
              <li className="text-sm  font-medium hover:text-[#0CA0A2] text-[#626E94]  cursor-pointer   transition-all duration-700">
                قیمت ها
              </li>
              <div className="flex hover:text-[#0CA0A2] cursor-pointer    transition-all duration-700">
                <li className="text-[16px] font-[500]  text-[#626E94]">
                  بلاگ متانکست
                </li>
                <select
                  name=""
                  id=""
                  className="mt-[-3px] text-[#626E94]"
                ></select>
              </div>
              <div className="flex hover:text-[#0CA0A2]    transition-all duration-700 cursor-pointer">
                <li className="text-[16px] font-[500] text-[#626E94] ">
                  لینک های مفید
                </li>
                <select
                  name=""
                  id=""
                  className="mt-[-3px] text-[#626E94]"
                ></select>
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
            <Link to="/login">
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
            </Link>

            <div className="language flex  cursor-pointer">
              <select
                name="languageSelect"
                id="languageSelect"
                className="text-lg text-[#626E94]"
                value={language}
                onChange={(e) => handleChangeLanguage(e.target.value)}
              >
                <option value="Fa">Fa</option>
                <option value="En">En</option>
              </select>
              <img
                src="./Images/language.png"
                alt=""
                className="w-[23px] h-[23px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
