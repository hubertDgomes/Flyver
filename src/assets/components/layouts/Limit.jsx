import React from 'react'
import Container from '../../Container'
import Images from '../../Images'
import limit from '/src/assets/limit.png'
import play from '/src/assets/play.png'
const Limit = () => {
  return (
    <div className="bg-[url(/src/assets/banner3.png)] bg-no-repeat bg-center bg-cover">
        <Container className={"py-[90px]"}>
            <Images className={"m-auto mb-[30px]"} src={limit}/>
            <Images className={"m-auto cursor-pointer"} src={play}/>
        </Container>
    </div>
  )
}

export default Limit