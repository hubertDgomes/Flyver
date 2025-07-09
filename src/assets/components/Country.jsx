import React from 'react'
import Images from '../Images'

const Country = ({countryImg,countryName}) => {
  return (
    <div className='flex-col place-items-center'>
      <Images src={countryImg} className={"rounded-[50%]"}/>
      <p className='font-logo1 font-medium text-[16px] mt-[10px]'>{countryName}</p>
    </div>
    
  )
}

export default Country
