import React from "react";
import Container from "../../Container";
import Images from "../../Images";
import user from '/src/assets/userB.png'
const ComBanner = () => {
  return (
    <>
      <div className="bg-[#50A1FF]">
        <Container className={"py-[60px]"}>
        <div className="text-center  py-[60px] font-logo1">
          <p className="text-white font-medium text-[36px] mb-[20px]">
            Ready for Your Next Adventure?
          </p>
          <p className="font-logo1 font-light text-[20px] text-white mx-[204px] mb-[20px]">
            Join our vibrant community of travellers. Share your stories,
            connect with fellow explorers, and get exclusive access to travel
            deals and insights.
          </p>
            <div className="relative cursor-pointer">
                <button className="py-[7px] px-[70px] bg-white text-[#50A1FF] rounded-[15px] font-logo1 font-semibold text-[20px]">Join the Community Today!</button>
                <Images className={"absolute left-[477px] top-[7px]"} src={user}/>
            </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default ComBanner;
