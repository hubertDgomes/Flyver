import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Feature from '../Feature'
import kath from '/src/assets/kath.png'
import nep from '/src/assets/nep.png'
import china from '/src/assets/china2.png'
import ama from '/src/assets/amazone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Experience = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
    <Container className={"py-[60px]"}>
        <p className='font-logo1 font-medium text-[36px] text-center my-[50px]'>Featured Experiences</p>
        <Slider {...settings}>
      <div>
        <Feature src={kath} text={"Kathmandu: Cultural Heart of Nepal"}/>
      </div>
      <div>
        <Feature src={nep} text={"Nepal: Trekking in the Himalayas"}/>
      </div>
      <div>
        <Feature src={china} text={"China: The great wall of china"}/>  
      </div>
      <div>
        <Feature src={ama} text={"Amazon: Expedition into the Green Heart"}/>
      </div>
      <div>
        <Feature src={kath} text={"Kathmandu: Cultural Heart of Nepal"}/>
      </div>
      <div>
        <Feature src={nep} text={"Nepal: Trekking in the Himalayas"}/>
      </div>
    </Slider>
    </Container>
    </>
  )
}

export default Experience