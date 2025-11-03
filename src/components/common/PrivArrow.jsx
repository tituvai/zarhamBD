import React from 'react'
import { LuChevronLeft } from "react-icons/lu";

const PrevArrow = (props) => {
    const {onClick } = props;
  return (
    <LuChevronLeft className='text-3xl hidden lg:block hover:text-darkText text-lightText absolute top-1/2 left-5 -translate-y-1/2 z-10' onClick={onClick}/>
    
  )
}

export default PrevArrow