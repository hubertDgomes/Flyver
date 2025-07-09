import React from 'react'
import Country from '../Country'
import Container from '../../Container'
import Flex from '../../Flex'
import uk from '../../con1.png'
import china from '../../con2.png'
import ger from '../../con3.png'
import aust from '../../con4.png'
import sw from '../../con5.png'
import us from '../../con6.png'
import jp from '../../con7.png'
import nep from '../../con8.png'

const StoryCountry = () => {
  return (
    <>
    <Container className={"py-[30px]"}>
        <p className='text-center font-logo1 font-medium text-[36px] mb-[40px]'>Explore Destinations by Region</p>
        <Flex className={"gap-x-[40px]"}>
            <Country countryImg={uk} countryName={"England"}/>
            <Country countryImg={china} countryName={"China"}/>
            <Country countryImg={ger} countryName={"Germany"}/>
            <Country countryImg={aust} countryName={"Austria"}/>
            <Country countryImg={sw} countryName={"Switzerland"}/>
            <Country countryImg={us} countryName={"United States"}/>
            <Country countryImg={jp} countryName={"Japan"}/>
            <Country countryImg={nep} countryName={"Nepal"}/>
        </Flex>
    </Container>
    </>
  )
}

export default StoryCountry
