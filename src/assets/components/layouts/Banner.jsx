import React from "react";
import Container from "../../Container";
import { CiSearch } from "react-icons/ci";
const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/bg1.png)] bg-no-repeat bg-cover bg-center py-[170px]">
        <Container className={"text-center"}>
          <p className="font-logo2 text-[100px] text-white my-[-39px]">
            Unlock Your Next Adventure
          </p>
          <p className="font-logo1 font-medium text-[18px] text-white mx-[278px]">
            Discover breathtaking destinations and curate unforgettable
            experiences with our expert travel guides.
          </p>
          <button className="cursor-pointer text-[16px] font-logo1 font-bold text-white py-[14px] px-[20px] bg-[#50A1FF] rounded-[15px] mt-[50px]">
            Start Exploring Now
          </button>
          <br></br>
          <div className="relative inline-block mt-[50px]">
            <input
              className="w-[412px] py-[10px] px-[30px] bg-white rounded-[30px] placeholder:font-logo1 text-[14px]"
              placeholder="Search for destinations or activities..."
            />
            <CiSearch className="text-black text-[20px] font-bold absolute top-[13px] left-2" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
