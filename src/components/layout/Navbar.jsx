import React, { useState } from 'react'
import Image from '../common/Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {

  // Mobile divece Part Start

  const [mobileBars, setMobileBars] =useState(false)

  const handleMobileBars = ()=>{
    setMobileBars(!mobileBars)
  }

  // Mobile divece Part End
  return (
   <>
   <div className="bg-darkText">
     <Container>
        <div className="py-5 hidden lg:block">
        <Flex>
          <div className="relative ">
             <Link to={'/'}><Image className={'w-[200px]'} imgSrc={logo} imgAlt={'logo.png'}/></Link>
            </div>
          <div className="">
              <ul className='flex items-center gap-x-10'>
            {[
              {name: "Home", path:'/'},
              {name: "Shop", path:'/'},
              {name: "Collections", path:'/'},
              {name: "Lookbook", path:'/'},
              {name: "About", path:'/'},
              {name: "Contact", path:'/'},
            ].map((item, index)=>(
              <li key={index} className='text-base text-lightText hover:text-accent font-medium'><Link to={item.path}>{item.name}</Link></li>
            ))}
          </ul>
          </div>
          <div className="flex items-center gap-x-8">
            <IoIosSearch className=' size-6 cursor-pointer  text-lightText'/>
            <IoMdHeartEmpty className='text-lightText size-6'/>
            <FaRegUser className='text-lightText size-5'/>
            <AiOutlineShoppingCart className='text-lightText size-6'/>
          </div>
        </Flex>
        </div>

        {/* mobile divece Part Start  */}

           <Flex className={'lg:hidden px-3'}>
             <div className="relative ">
             <Link to={'/'}><Image className={'w-[200px]'} imgSrc={logo} imgAlt={'logo.png'}/></Link>
            </div>
          <div className="">
             {mobileBars ? <MdOutlineClear onClick={handleMobileBars} className='text-2xl text-lightText'/> : <span onClick={handleMobileBars}><HiBars3 className='text-lightText size-6'/></span>}
             </div>
           </Flex>
            {mobileBars && <div className="">
               <ul className='p-5'>
                {[
                  {name: "Home", path:'/'},
                  {name: "Shop", path:'/'},
                  {name: "Collections", path:'/'},
                  {name: "Lookbook", path:'/'},
                  {name: "About", path:'/'},
                  {name: "Contact", path:'/'},
                ].map((item, index)=>(
                  <li key={index} className='text-base py-1 text-lightText hover:text-accent font-medium'><Link to={item.path}>{item.name}</Link></li>
                ))}
              </ul>
              <div className="flex items-center gap-x-8 px-5 pb-5">
            <IoIosSearch className=' size-6 cursor-pointer  text-lightText'/>
            <IoMdHeartEmpty className='text-lightText size-6'/>
            <FaRegUser className='text-lightText size-5'/>
            <AiOutlineShoppingCart className='text-lightText size-6'/>
          </div>
         </div>  
        }
           
           

     </Container>  
   </div>
   </>
  )
}

export default Navbar