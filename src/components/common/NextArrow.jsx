

import React from 'react'
import { LuChevronRight } from "react-icons/lu";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
      <LuChevronRight className='text-3xl hidden lg:block text-lightText hover:text-darkText cursor-pointer absolute top-1/2 right-5 -translate-y-1/2 z-10' onClick={onClick}/>
  )
}

export default NextArrow