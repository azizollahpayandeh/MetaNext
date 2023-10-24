import React from "react";

const imageList = [
  {
    src: "./Images/Group 70223.png",
    alt: "",
    top: "40px",
    right: "675px",
  },
  {
    src: "./Images/Group 70224.png",
    alt: "",
    top: "265px",
    right: "-80px",
  },
  {
    src: "./Images/Group 70222.png",
    alt: "",
    top: "400px",
    right: "200px",
  },
  {
    src: "./Images/Group 70221.png",
    alt: "",
    top: "320px",
    right: "600px",
  },
  {
    src: "./Images/Group 70220.png",
    alt: "",
    top: "50px",
    right: "-150px",
  },
];

export default function VideoSection() {
  return (
    <div className="all relative mx-auto w-[685px] h-[480px]">
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
