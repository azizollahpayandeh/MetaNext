import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import { otpNumberState } from "../../RecoilState/RecoilState";
import { useRecoilState } from "recoil";

export default function Otp() {
  const [otp, setOtp] = useRecoilState(otpNumberState)
  const isOtpValid = otp.length === 5;
  const Navigate = useNavigate();
  const secret = Cookies.get("otpSecret");

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        "https://demo1.metanext.biz/api/v1/auth/otp",
        {
          secret: secret,
          otp: otp,
        }
      );

      if (data) {
        Navigate("/password-set");
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "لطفا کد را درست  وارد کنید.",
        text: error.message,
      });
    }
  };

  return (
    <>
      <div className=" mt-[50px] mb-[50px]">
        <img
          className="mx-auto w-[180px]"
          src="./Images/images (3).jfif"
          alt="login-otp"
        />
        <h1 className="text-center mt-[30px] font-[800]">ورود-ثبت&nbsp;نام</h1>
        <p className="text-center mt-[30px] font-[400]">
          لطفا کد ارسال شده را وارد کنید.
        </p>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={5}
          inputType="tel"
          shouldAutoFocus={true}
          containerStyle="block mx-auto justify-between w-[20vw] flex-row-reverse mt-[20px]"
          inputStyle="border-b-4 border-[#0CA0A2] outline-transparent mt-[30px] focus-border-b-4 focus-border-[#0CA0A2] mb-[20px]"
          renderInput={(props) => <input {...props} dir="ltr" />}
        />
        <p className="text-center mt-[20px]">
          کد را دریافت نکردید؟
          <Link to="/login">
            <span className="text-blue-600 cursor-pointer">دریافت مجدد کد.</span>
          </Link>
        </p>
        <button
          className={`text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[60px] px-[5rem] py-4 rounded-[20px] ${
            isOtpValid ? "" : "cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          disabled={!isOtpValid}
        >
          تایید کد
        </button>
      </div>
    </>
  );
}
