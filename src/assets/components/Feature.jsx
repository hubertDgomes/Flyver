import React from "react";
import Images from "../Images";
import mem from '/src/assets/member.png'

const Feature = ({src,text,className}) => {
  return (
    <>
      <div className={`w-[315px] rounded-b-2xl shadow-lg ${className}`}>
        <Images src={src} />
      <p className="px-[5px] font-logo1 pr-[40px] mb-[20px] mt-[20px] font-medium text-[18px] shadow-[20px]">{text}</p>
      <Images className={"mb-[9px]"} src={mem}/>
      </div>
    </>
  );
};

export default Feature;
