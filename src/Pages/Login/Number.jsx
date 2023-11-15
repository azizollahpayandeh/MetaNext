import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { phoneNumberStatee } from "../../RecoilState/RecoilState";
import { useRecoilState } from "recoil";

export default function Number() {
  const [phoneNumberValue, setPhoneNumberValue] =
    useRecoilState(phoneNumberStatee);
  const Navigate = useNavigate();
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "شماره تلفن باید 11 رقمی باشد")
      .required("شماره تلفن الزامی است"),
  });

  console.log("%c Phone Number:", "color:green", phoneNumberValue);

  const sentCode = async (event) => {
    try {
      const { data } = await axios.post(
        "https://demo1.metanext.biz/api/v1/auth/request",
        {
          type: "mobile",
          mobile_prefix: "+98",
          mobile: phoneNumberValue,
        }
      );

      event.preventDefault();
      console.log("Phone Number:", phoneNumberValue);
      console.log("Secret:", data.data.secret);

      // Store the secret in a cookie
      Cookies.set("otpSecret", data.data.secret);

      if (data) {
        Navigate("/otp");
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  const handlePhoneNumberChange = (e) => {
    setPhoneNumberValue(e.target.value);
    formik.handleChange(e);
  };

  return (
    <div>
      <div className="mt-[50px] mb-[50px]">
        <img
          className="mx-auto w-[180px]"
          src="./Images/images (3).jfif"
          alt="login-otp"
        />
        <h1 className="text-center mt-[30px] font-[800]">ورود-ثبت&nbsp;نام</h1>
        <p className="text-center mt-[30px] font-[400]">
          لطفا شماره تلفن همراه خود را وارد کنید.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="text-right mx-auto block border-b-2 border-[#0CA0A2]
            outline-transparent mt-[30px] focus-border-b-4 focus-border-[#0CA0A2]"
            type="number "
            placeholder="شماره را وارد کنید..."
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumberValue}
            onChange={handlePhoneNumberChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-600 flex justify-center items-center mt-[20px]">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
          <button
            type="submit"
            className="text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[40px] px-[5rem] py-4 rounded-[20px]"
            disabled={!formik.isValid}
            onClick={sentCode}
          >
            {formik.isValid ? "تایید شماره تلفن" : "شماره نادرست"}
          </button>
        </form>
      </div>
    </div>
  );
}
