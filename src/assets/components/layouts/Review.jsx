import React from 'react'
import Container from '../../Container'

const Persons = ()=>{
    return(
        <>
        <div className="flex-col place-items-center">

        </div>
        </>
    )
}

const Review = () => {
  return (
    <>
    <Container className={"py-[60px]"}>
        <p className='text-center font-logo1 font-medium text-[34px]'>What Our Travelers Say</p>
        <Persons/>
    </Container>
    </>
  )
}

export default Review