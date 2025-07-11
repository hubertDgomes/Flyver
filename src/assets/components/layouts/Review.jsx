import React from 'react'
import Container from '../../Container'
import Images from '../../Images'
import user1 from '/src/assets/user1.png'
import star from '/src/assets/stars.png'
import Flex from '../../Flex'
const Persons = ({user, userName, comments})=>{
    return(
        <>
        <div className="flex-col place-items-center w-[366px] p-[40px] shadow-2xl">
          <Images src={user}/>
          <p className='font-logo1 font-medium text-[20px]'>{userName}</p>
          <Images src={star}/>
          <p className='text-center font-logo1 font-extralight text-[12px]'>{comments}</p>
        </div>
        </>
    )
}

const Review = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <p className='text-center font-logo1 font-medium text-[34px] mb-[40px]'>What Our Travelers Say</p>
        <Flex className={"flex-wrap justify-between gap-y-[60px]"}>
          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>

          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>

          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>

          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>

          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>

          <Persons user={user1} userName={"Sarah M."} comments={"\"Our trip to Japan was meticulously planned and absolutely perfect!"}/>
        </Flex>
    </Container>
    </>
  )
}

export default Review