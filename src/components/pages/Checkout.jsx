import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Heading from '../common/Heading'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { MdOutlineClear } from "react-icons/md";
import Image from '../common/Image'
import shirt from '/src/assets/shirt.jpg'

const Checkout = () => {
  return (
    <>
    <div className="py-20 bg-lightText">
        <Container>
            <div className="flex justify-center items-center gap-x-7 lg:gap-x-20">
                <Link to={'/cart'}><Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Card'} as={'h4'}/></Link>
                <Link to={'/checkout'}><Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Checkout'} as={'h4'}/></Link>
                <Link to={'/confirmation'}>
                <Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Confirmation'} as={'h4'}/>
                </Link>
            </div>
            <div className={'pt-20 flex justify-between flex-col lg:flex-row'}>
                <div className="bg-white rounded-2xl lg:p-10 p-3 lg:w-[49%]">
                    <Heading className={'text-lg text-darkText font-semibold'} text={'Shipping Information'} as={'h4'}/>
                    <form action="#">
                        <input className='w-full mt-5 text-base text-darkText placeholder:text-stone-400 placeholder:text-sm outline-0 border-2 border-accent py-2 px-3 rounded ' type="text" placeholder='Full Name' />
                        <input className='w-full mt-5 text-base text-darkText placeholder:text-stone-400 placeholder:text-sm outline-0 border-2 border-accent py-2 px-3 rounded ' type="text" placeholder='Address' />
                        <input className='w-full mt-5 text-base text-darkText placeholder:text-stone-400 placeholder:text-sm outline-0 border-2 border-accent py-2 px-3 rounded ' type="text" placeholder='Phone Code' />
                        <input className='w-full mt-5 text-base text-darkText placeholder:text-stone-400 placeholder:text-sm outline-0 border-2 border-accent py-2 px-3 rounded ' type="text" placeholder='Email' />
                        <input className='w-full mt-5 text-base text-darkText placeholder:text-stone-400 placeholder:text-sm outline-0 border-2 border-accent py-2 px-3 rounded ' type="text" placeholder='City Posity' />
                       <div className="flex gap-x-3 py-5">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded hover:border-accent "></div>
                        <Heading className={'text-base text-stone-600 font-normal'} text={'Save this address for future purchases'} as={'h6'}/>
                       </div>
                       <div className="">
                        <Button className={'w-full'} btnText={'Place Order'}/>
                       </div>
                    </form>
                </div>
                
                

                <div className="bg-white rounded-xl lg:p-10 pt-5 lg:w-[49%]">
                 <Heading className={'text-lg text-darkText font-semibold pl-3'} text={'Your Order Summary'} as={'h4'}/>
<div className="p-3 hover:bg-stone-100 rounded mt-3">
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
    <div className="lg:w-[55%] flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-start">
      <div className="flex items-center gap-3 w-[65%]">
        <Image className="w-[60px] md:w-[70px]" imgSrc={shirt} imgAlt="shirt.jpg" />
        <Heading className="text-base md:text-lg text-darkText font-medium" text="Shirt Total" as="h5"/>
      </div>
      <div className="md:ml-5 w-[25%]">
        <Heading className="text-base md:text-lg text-gray-700 font-semibold text-right" text="2324 tk" as="h5"/>
      </div>
    </div>

    <div className="lg:w-[40%] flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto mt-2 md:mt-0">
      <div className='w-[20%]'>
        <Heading className="text-sm md:text-base text-gray-600 font-medium" text="Size: XL" as="h5" />
      </div>

      <div className="flex items-center w-[60%]">
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center"> +</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-4 mx-3">  1</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center">  - </span>
      </div>

      <div className='w-[10%]'>
        <MdOutlineClear className="text-gray-500 hover:text-darkText size-5 cursor-pointer" />
      </div>
    </div>
  </div>
</div>


                 {/* =========================================== */}
                
              <div className="p-3 hover:bg-stone-100 rounded mt-3">
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
    <div className="lg:w-[55%] flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-start">
      <div className="flex items-center gap-3 w-[65%]">
        <Image className="w-[60px] md:w-[70px]" imgSrc={shirt} imgAlt="shirt.jpg" />
        <Heading className="text-base md:text-lg text-darkText font-medium" text="Shirt Total" as="h5"/>
      </div>
      <div className="md:ml-5 w-[25%]">
        <Heading className="text-base md:text-lg text-gray-700 font-semibold text-right" text="2324 tk" as="h5"/>
      </div>
    </div>

    <div className="lg:w-[40%] flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto mt-2 md:mt-0">
      <div className='w-[20%]'>
        <Heading className="text-sm md:text-base text-gray-600 font-medium" text="Size: XL" as="h5" />
      </div>

      <div className="flex items-center w-[60%]">
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center"> +</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-4 mx-3">  1</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center">  - </span>
      </div>

      <div className='w-[10%]'>
        <MdOutlineClear className="text-gray-500 hover:text-darkText size-5 cursor-pointer" />
      </div>
    </div>
  </div>
</div>

                 {/* ======================================================= */}

<div className="p-3 hover:bg-stone-100 rounded mt-3">
  <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3">
    <div className="lg:w-[55%] flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-start">
      <div className="flex items-center gap-3 w-[65%]">
        <Image className="w-[60px] md:w-[70px]" imgSrc={shirt} imgAlt="shirt.jpg" />
        <Heading className="text-base md:text-lg text-darkText font-medium" text="Shirt Total" as="h5"/>
      </div>
      <div className="md:ml-5 w-[25%]">
        <Heading className="text-base md:text-lg text-gray-700 font-semibold text-right" text="2324 tk" as="h5"/>
      </div>
    </div>

    <div className="lg:w-[40%] flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto mt-2 md:mt-0">
      <div className='w-[20%]'>
        <Heading className="text-sm md:text-base text-gray-600 font-medium" text="Size: XL" as="h5" />
      </div>

      <div className="flex items-center w-[60%]">
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center"> +</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-4 mx-3">  1</span>
        <span className="text-base text-darkText font-semibold border-2 border-gray-300 rounded px-2 cursor-pointer text-center">  - </span>
      </div>

      <div className='w-[10%]'>
        <MdOutlineClear className="text-gray-500 hover:text-darkText size-5 cursor-pointer" />
      </div>
    </div>
  </div>
</div>

                 
               </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Checkout

