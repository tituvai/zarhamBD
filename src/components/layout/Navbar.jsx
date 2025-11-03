import React from 'react'
import Image from '../common/Image'
import logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
   <>
   <div className="bg-darkText">
     <Container>
        <div className="py-5">
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
     </Container>  
   </div>
   </>
  )
}

export default Navbar