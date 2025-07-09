import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Images from '../../Images'
import plane from '../../plane.png'
import heart from '../../heart.png'
import cart from '../../cart.png'
import ticket from '../../ticket.png'
import search from '../../magnifine.png'
import user from '../../user.png'
import person from '../../person.png'
const Header = () => {
  return (
    <>
    <Container className={"py-[30px]"}>
        <Flex className={"justify-between"}>
            <div className="flex items-end">
                <p className='font-logo1 text-[32px] font-semibold'>Flyver</p>
                <Images src={plane}/>
            </div>
            <div className="flex gap-x-[20px]">
                <Images src={heart} className={"w-[30px]"}/>
                <Images src={cart} className={"w-[30px]"}/>
                <Images src={ticket} className={"w-[30px]"}/>
                <Images src={search} className={"w-[30px]"}/>
                <Images src={user} className={"w-[30px]"}/>
                <Images src={person} className={"w-[30px]"}/>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Header
