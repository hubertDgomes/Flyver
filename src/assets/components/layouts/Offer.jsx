import React from "react";
import Container from "../../Container";
import OfferPack from "./OfferPack";
import first from "/src/assets/swees.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bali from '/src/assets/bali.png'
import paris from '/src/assets/paris.png'
import dubai from '/src/assets/dubai.png'

const Offer = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container className={"py-[60px]"}>
      <div className="text-center">
        <p className="font-logo1 font-medium text-[36px]">
          Hot Deals & Special Offers
        </p>
        <p className="font-logo1 text-[20px] mx-[271px] text-black/60">
          Grab incredible discounts on your next adventure! Limited time offers
          you won't want to miss.
        </p>
      </div>

      <Slider {...settings}>
      <div>
        <OfferPack
        offerPhoto={first}
        offerCap={"Swiss Alps Adventure"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
      <div>
        <OfferPack
        offerPhoto={bali}
        offerCap={"Tropical Bali Getaway"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
      <div>
        <OfferPack
        offerPhoto={paris}
        offerCap={"Swiss Alps Adventure"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
      <div>
        <OfferPack
        offerPhoto={dubai}
        offerCap={"Swiss Alps Adventure"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
      <div>
        <OfferPack
        offerPhoto={first}
        offerCap={"Swiss Alps Adventure"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
      <div>
        <OfferPack
        offerPhoto={bali}
        offerCap={"Swiss Alps Adventure"}
        placeName={"Zermatt, Switzerland"}
        regPrice={"2,500"}
        offerPrice={"1,999"}
      /> 
      </div>
    </Slider>
    </Container>
  );
};

export default Offer;
