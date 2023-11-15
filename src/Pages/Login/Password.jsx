import React, { useState } from "react";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { PasswordNumberState } from "../../RecoilState/RecoilState";
import { useRecoilState } from "recoil";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(10, "رمز عبور باید حداقل 10 کاراکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "رمز عبور باید شامل حروف بزرگ و کوچک و اعداد باشد"
    )
    .required("رمز عبور الزامی است"),
});

export default function Password() {
  const [password, setPassword] = useRecoilState(PasswordNumberState)
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); // استفاده از useNavigate برای ریدایرکت

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await schema.validate({ password });
      setModalOpen(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: error.message,
      });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "با موفقیت‌ لاگین شدید.",
    }).then(() => {
      navigate("/"); // ریدایرکت به صفحه اصلی پس از موفقیت‌آمیز بودن
    });
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
          لطفا رمز عبور خود را وارد کنید.
        </p>
        <input
          className=" text-right mx-auto block border-b-2 border-[#0CA0A2]
         outline-transparent mt-[30px] focus:border-b-2 focus-border-[#0CA0A2]"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          autoFocus={true}
        />
        <button
          onClick={handleSubmit}
          className="text-[white] bg-[#0CA0A2] text-center mx-auto block mt-[60px] px-[5rem] py-4 rounded-[20px]"
        >
          تایید
        </button>
        {isModalOpen && (
          closeModal()
        )}
      </div>
    </>
  );
}
