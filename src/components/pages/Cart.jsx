import React from 'react'
import Container from '../common/Container'
import Heading from '../common/Heading'
import Image from '../common/Image'
import shirt from '/src/assets/shirt.jpg'
import { MdOutlineClear } from "react-icons/md";
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <div className="py-20 bg-lightText">
        <Container>
            <div className="flex justify-center items-center gap-x-6 lg:gap-x-20">
                <Link to={'/cart'}><Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Card'} as={'h4'}/></Link>
                <Link to={'/checkout'}><Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Checkout'} as={'h4'}/></Link>
                <Link to={'confirmation'}>
                <Heading className={'text-lg text-darkText font-semibold hover:text-accent'} text={'Confirmation'} as={'h4'}/>
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-between pt-20">
               <div className="bg-white rounded-xl p-3 lg:p-10  lg:w-[70%]">
                 <Heading className={'text-base text-darkText font-semibold'} text={<><span>Your Cart</span><span>(3 items)</span></>} as={'h4'}/>
            
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

               {/* ========================================================== */}

               <div className="lg:w-[28%] bg-white rounded-xl p-3 lg:p-10">
                    <Heading className={'text-lg text-darkText font-semibold pb-8'} text={'Order'} as={'h4'}/>
                    <div className="flex justify-between items-center">
                        <Heading className={'text-base text-darkText font-semibold '} text={'Subtotal:'} as={'h4'}/>
                        <Heading className={'text-base text-gray-600 font-semibold '} text={'235 tk'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                        <Heading className={'text-base text-darkText font-semibold '} text={'Shipping:'} as={'h4'}/>
                        <Heading className={'text-base text-gray-600 font-semibold '} text={'23 tk'} as={'h5'}/>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-b-2 border-gray-200 pb-6">
                        <Heading className={'text-base text-darkText font-semibold '} text={'Vat:'} as={'h4'}/>
                        <Heading className={'text-base text-gray-600 font-semibold '} text={'15 tk'} as={'h5'}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <Heading className={'text-base text-darkText font-semibold pt-2'} text={'Total'} as={'h3'}/>
                        <Heading className={'text-base text-darkText font-semibold pt-2'} text={'2450'} as={'h3'}/>
                    </div>

                    <div className="pt-5">
                        <input className='p-1 border-2 border-accent focus:outline-0 rounded w-full' type="text" placeholder='Promo Code'/>
                        <div className="flex justify-between items-center pt-5">
                            <Heading className={'text-base text-darkText font-bold'} text={'Estimated Total:'} as={'h5'}/>
                            <Button btnText={'Apply Coupon'}/>
                        </div>
                        <div className="pt-5">
                            <Button className={'w-full'} btnText={'Product to Checkout'}/>
                        </div>
                    </div>
               </div>
            </div>


            {/* CheckOut Part Start  */}


            {/* CheckOut Part End */}
        </Container>
    </div>
    </>
  )
}

export default Cart