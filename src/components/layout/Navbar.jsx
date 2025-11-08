import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import Image from '../common/Image';
import logo from '/src/assets/logo.png'



const Navbar = () => {

    // MenuItem Active Part Start 
  const [manuActive, setManuActive]= useState(false)
        const handleMenuActive = (index)=>{
          setManuActive(index)
        }
        // Menu Active Part End 

  // Mobile divece Part Start
  const [mobileBars, setMobileBars] =useState(false)

  const handleMobileBars = ()=>{
    setMobileBars(!mobileBars)
  }
  // Mobile divece Part End

  // Navebar Scroll Part Start 
    // menu Part Start 
   const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  // Navebar Scroll Part End

  return (
   <>
  <div className="py-12">
     <div className={`fixed z-50 top-0 left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0 bg-[#000000]/70' : '-translate-y-full bg-darkText'}`}>
     <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-5 hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="relative ">
             <Link to={'/'}>
                <span className="text-xl font-bold text-white w-[200px] h-10 flex items-center justify-center ">
                  <Image imgSrc={logo}/>
                </span>
             </Link>
            </div>
          <div className="flex-grow flex justify-center">
              <ul className='flex items-center gap-x-10'>
            {[
              {name: "Home", path:'/'},
              {name: "Shop", path:'/shop'},
              {name: "Collections", path:'/'},
              {name: "Lookbook", path:'/'},
              {name: "About", path:'/'},
              {name: "Contact", path:'/'},
            ].map((item, index)=>(
              <li key={index} onClick={()=>handleMenuActive(index)} className={`text-base font-medium transition-colors ${manuActive=== index ? 'text-white' : 'text-gray-400 hover:text-white'}`}><Link to={item.path}>{item.name}</Link></li>
            ))}
          </ul>
          </div>
          <div className="flex items-center gap-x-8 text-white">
            <IoIosSearch className=' size-6 cursor-pointer hover:text-gray-400'/>
            <IoMdHeartEmpty className=' size-6 cursor-pointer hover:text-gray-400'/>
            <FaRegUser className=' size-5 cursor-pointer hover:text-gray-400'/>
           <Link to={'/cart'}><AiOutlineShoppingCart className=' size-6 cursor-pointer hover:text-gray-400'/></Link>
          </div>
        </div> 
        </div>

        {/* mobile divece Part Start  */}


           <div className={'lg:hidden px-3 flex items-center justify-between py-3'}>
             <div className="relative ">
             <Link to={'/'}>
                <span className="text-xl font-bold text-white">Zarhan</span>
             </Link>
            </div>
          <div className="text-white">
             {mobileBars ? <MdOutlineClear onClick={handleMobileBars} className='text-3xl cursor-pointer'/> : <span onClick={handleMobileBars}><HiBars3 className='size-6 cursor-pointer'/></span>}
             </div>
           </div> 
            {mobileBars && <div className="absolute top-full left-0 w-full bg-[#000000] shadow-lg lg:hidden">
               <ul className='p-5'>
                {[
                  {name: "Home", path:'/'},
                  {name: "Shop", path:'/shop'},
                  {name: "Collections", path:'/'},
                  {name: "Lookbook", path:'/'},
                  {name: "About", path:'/'},
                  {name: "Contact", path:'/'},
                ].map((item, index)=>(
                  <li key={index} onClick={()=>handleMenuActive(index)} className={`text-base py-3 px-2 font-medium transition-colors border-b border-gray-700 ${manuActive=== index ? 'text-white' : 'text-gray-400 hover:text-white'}`}><Link to={item.path}>{item.name}</Link></li>
                ))}
              </ul>
              <div className="flex items-center gap-x-8 px-5 pb-5 text-white">
            <IoIosSearch className=' size-6 cursor-pointer'/>
            <Link to={'/wishList'}><IoMdHeartEmpty className=' size-6 cursor-pointer'/></Link>
            
            <FaRegUser className=' size-5 cursor-pointer'/>
            <AiOutlineShoppingCart className=' size-6 cursor-pointer'/>
          </div>
         </div>  
        }          
     </div> 
   </div>
  </div>
   </>
  )
}

export default Navbar