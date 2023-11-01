import React from 'react'

export default function Options({title, srcimg, top, right, width}) {
  return (
    <>
    <div className='all'>
        <div className={`cart w-[350px] h-[100px] bg-white shadow-md bg-opacity-90 rounded-3xl  flex gap-6 items-center top-[${top}] right-[${right}]`}  >
                <img src={srcimg} alt=""  className='w-[70px] h-[70px] mr-[15px]'/>
                <h1 className='text-[20px] font-[700] ml-[15px] '>{title}</h1>
        </div>
    </div></>
  )
}
