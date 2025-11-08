import React from 'react'
import shirt from '/src/assets/shirt.jpg'
import Image from '../common/Image'
import Heading from '../common/Heading'
import { MdOutlineClear } from "react-icons/md";
import Button from '../common/Button';
export const WishList = () => {
  return (
   <>
   <div className="">
    <div className="w-[500px] px-3 py-5 bg-white absolute right-0 top-20 rounded">
         <div className="p-3 hover:bg-stone-100 rounded mt-3 flex justify-between items-center">
                <div className="flex items-center gap-3 w-[250px]">
                <Image className="w-[60px] md:w-[70px]" imgSrc={shirt} imgAlt="shirt.jpg" />
                <Heading className="text-base md:text-lg text-darkText font-medium" text={'title'} as="h5"/>
                </div>
                <div className="md:ml-5 w-[100px]">
                <Heading className="text-base md:text-lg text-gray-700 font-semibold text-right" text={'price'} as="h5"/>
                </div>
                <div className="w-[170px] px-5">
                <button className='w-full text-xs font-medium cursor-pointer text-white bg-darkText px-2 rounded py-1'>Add to Cart</button>
            </div>
            <div className='w-[30px]'>
                <MdOutlineClear className="text-gray-500 hover:text-darkText size-5 cursor-pointer" />
                </div>
            </div>   
   </div>
   </div>
   </>
  )
}
