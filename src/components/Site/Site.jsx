import React from 'react'

export default function Site() {
  return (
    <div>
          <div>
        <div className="system flex justify-between mt-[100px] mr-[30px]">
                <div className="w-[620px] h-[370px]">
                  <h1 className="text-[40px] font-semibold mb-[20px]">
                   سایت های ما در متانکست
                  </h1>
                  <p className="text-[18px] text-[#626E94] leading-[45px]">
                    ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با
                    سرعت بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس                    ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با
                    سرعت بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس
                  </p>
                  <div className="memebers flex justify-between items-center mt-[40px]">
                    <img
                      src="./Images/right11.png"
                      alt=""
                      className="w-[300px] h-[110px] rounded-[20px]"
                    />
                    <div className="flex gap-[100px] ">
                      <div className="flex flex-col gap-2 ">
                        <h1 className="text-[#0CA0A2]  text-[30px] font-semibold">
                          2000+
                        </h1>
                        <p className="text-[#0CA0A2] text-[14px]">خرید محصول</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#011627] text-[30px] font-semibold">
                          220+
                        </h1>
                        <p className="text-[14px]">کاربر فعال</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chart">
                  <img
                    src="./Images/Product views.png"
                    alt=""
                    className="mt-[-10px]"
                  />
                </div>
              </div>
    </div>
    </div>
  )
}
