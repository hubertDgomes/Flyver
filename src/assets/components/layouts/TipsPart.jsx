import React from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import Images from "../../Images";
import sea from "/src/assets/sea.png";
import food1 from '/src/assets/food1.png'
import food2 from '/src/assets/food2.png'
import food3 from '/src/assets/food3.png'
import food4 from '/src/assets/food4.png'
import food5 from '/src/assets/food5.png'
import food6 from '/src/assets/food6.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trip = ({ src, text, details }) => {
  return (
    <div className="w-[403px] pb-[90px] pt-[28px] px-[25px] border-2 border-[#50A1FF] text-center m-auto">
      <div className="flex justify-center">
        <Images src={src} />
      </div>
      <p className="font-logo1 font-medium text-[24px] mt-[10px] mb-[10px]">
        {text}
      </p>
      <p className="font-logo1 text-[14px] text-black/60">{details}</p>
    </div>
  );
};

const BestFood = ({food,text}) => {
  return (
    <>
      <div className="flex-col place-items-center">
        <Images src={food} />
        <p className="font-logo1 font-medium text-[18px] text-center">
          {text}
        </p>
      </div>
    </>
  );
};

const TipsPart = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container className={"py-[60px]"}>
        <div className="text-center">
          <p className="font-logo1 font-medium text-[34px]">
            Plan Your Perfect Trip
          </p>
          <p className="font-logo1 text-[20px] text-black/60 mb-[20px] mt-[10px] mx-[300px]">
            Simple steps to turn your travel dreams into reality. We make
            planning effortless.{" "}
          </p>
        </div>
        <Flex className={"justify-between"}>
          <Trip
            src={sea}
            text={"1. Discover & Search"}
            details={
              "Explore destinations, compare prices, and find the best options tailored for you using our powerful search."
            }
          />
          <Trip
            src={sea}
            text={"2. Plan & Customize"}
            details={
              "Explore destinations, compare prices, and find the best options tailored for you using our powerful search."
            }
          />
          <Trip
            src={sea}
            text={"3. Book Flights"}
            details={
              "Secure your bookings with confidence and get ready to experience a memorable trip.  We handle the rest!"
            }
          />
        </Flex>
        <div className="text-center mt-[60px] mb-[20px]">
          <p className="text-[34px] font-medium font-logo1">
            The Best Food Tour Ever
          </p>
        </div>
         <Slider {...settings}>
      <div>
        <BestFood food={food1} text={"Savory Dumplings Tour"} />
      </div>
      <div>
        <BestFood food={food2} text={"Authentic Italian Pizza"}/>
      </div>
      <div>
        <BestFood food={food3} text={"Thai Sweet Delights Tour"} />
      </div>
      <div>
        <BestFood food={food4} text={"Indian Bread Masterclass"} />
      </div>
      <div>
        <BestFood food={food5} text={"Mexican Street Tacos"} />
      </div>
      <div>
        <BestFood food={food6} text={"Japanese Sushi Journey"} />
      </div>
    </Slider>
      </Container>
    </>
  );
};

export default TipsPart;
