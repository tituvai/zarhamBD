import React from 'react'
import Heading from '../common/Heading'
import Flex from '../common/Flex'
import { FaTruck, } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaLock } from "react-icons/fa6";

const Derybely = () => {
  return (
    <div className="bg-darkText lg:p-10 p-3 my-5">
      <div className="border-white border-3 border-dashed lg:p-10 p-4">
        <div className="text-center">
          <Heading className={'text-2xl text-lightText font-normal uppercase'} text={'Well Come To The'} as={'h3'}/>
          <Heading className={'text-4xl text-accent font-semibold tracking-[1px] uppercase py-2'} text={'zarhan bd'} as={'h3'}/>
          <Heading className={'text-xl text-white font-normal tracking-[1px] uppercase'} text={'online shop'} as={'h3'}/>
        </div>
        <Flex className={'pt-10 flex-wrap gap-y-5'}>
          <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded">
            <FaTruck className=' lg:size-10 size-7 m-auto text-accent'/>
            <Heading className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'} text={'Frist Delivery All Over Bangladash'} as={'h4'}/>
            </div>
          <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded">
            <FiBox className=' lg:size-10 size-7 m-auto text-accent'/>
            <Heading className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'} text={'Easy 7 days return'} as={'h4'}/>
            </div>
            <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded">
            <FaLock className=' lg:size-10 size-7 m-auto text-accent'/>
            <Heading className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'} text={'Secure Transaction'} as={'h4'}/>
            </div>
          <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded">
            <FaTags className=' lg:size-10 size-7 m-auto text-accent'/>
            <Heading className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'} text={'Curated Selection'} as={'h4'}/>
          </div>
          
        </Flex>
      </div>
    </div>
  )
}

export default Derybely