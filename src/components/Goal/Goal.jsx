import React from "react";
import Options from "../Options/Options";
import { useRecoilState } from "recoil";
import { goalTextState, AllImgGoal, optionsState  } from "../../RecoilState/RecoilState"; // مسیر فایل recoilState.js را بر اساس نیاز به‌روزرسانی کنید

export default function Goal() {
  const [options, setOptions] = useRecoilState(optionsState);
  const [goalText, setGoalText] = useRecoilState(goalTextState);
  const [ImgGoal, setAllImgGoal] = useRecoilState(AllImgGoal);
  return (
    <>
      <div className="all relative">
        {ImgGoal.map((path) => {
          <img src={path.src} alt="" className={path.class} />;
        })}

        <div className="vector2-opacity mb-[150px] relative mx-auto w-[555px] h-[718px] rounded-[120px] bg-[#0CA0A2]   mt-[100px] flex flex-col gap-10 items-center justify-center">
          <div className="">
            <h1 className="text-white text-[46px] text-center font-[800] mb-[25px]">
              هدف ما در متانکست
            </h1>
            <img
              src="./Images/Group.png"
              alt=""
              className="mx-auto mb-[35px] reduced-opacity"
            />
            <p className="w-[460px] h-[410px] text-center text-white leading-[45px] text-[18px] font-[400] opacity-90 ">
              {goalText}
            </p>
          </div>

          {options.map((option, index) => (
        <div
          key={index}
          className={`absolute top-[${option.top}] left-[${option.left}]`}
        >
          <Options
            title={option.title}
            srcimg={option.srcimg}
            width={option.width}
          />
        </div>
      ))}
        </div>
      </div>
    </>
  );
}
