import React from "react";
import imageList from "../../data";


export default function VideoSection() {
  return (
    <div className="all relative mx-auto w-[685px] h-[480px] ">
      
      <img src="./Images/Group 34778.png" alt="" className="" />

      {imageList.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-[154px] h-[181px] absolute hover:scale-[1.2] cursor-pointer transition-all duration-700"
          style={{ top: image.top, right: image.right }}
        />
      ))}
    </div>
  );
}
