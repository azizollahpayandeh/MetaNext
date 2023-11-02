import React from 'react'

export default function BlogSlideCompo({srcImgBase}) {
  return (
    <>
        <div className='alll w-[380px] h-[550px] shadow-md bg-[#fefffc]  rounded-3xl border border-[#f5f5f4]'>
            <div className='mr-[30px] mt-[20px] '>

            <div className='img '>
                <img src={srcImgBase} alt="" className="w-[320px] h-[270px]" />
            </div> 
            <div className='underImg flex p-[6px] rounded-lg w-[120px] mt-[10px] justify-center items-center gap-2  bg-[#3959F812]'>
                <img src="./Images/element-3.png" alt="" />
                <p className='text-[#0CA0A2] text-[18px] font-[500]'>کسب و کار</p>
            </div>
            <div className='text w-[300px]'>
                    <h1 className='text-[#000000] text-[24px] font-[600 font-[600]  mt-[20px]'>چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم</h1>
            </div>
            <div className='time flex justify-around gap- mt-[45px] opacity-70'>
                <div className='right flex gap-2 mr-[-30px]'>
                <img src="./Images/clock.png" alt=""  className='w-[17px] h-[17px]'/>
                <p className='text-[#7E8AAB] text-[14px] font-[400]'>مدت زمان مطالعه: 2 دقیقه</p>
                </div>
                <div className='left flex  gap-1'>
                    <p className='text-[#7E8AAB] text-[14px] font-[400]'>12 اردیبهشت 1401</p>
                    <img src="./Images/calendar.png" alt="" className='w-[17px] h-[17px]' />
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
