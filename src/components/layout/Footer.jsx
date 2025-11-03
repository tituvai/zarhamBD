import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'
import Image from '../common/Image'
import logo from '/src/assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaTwitter , FaInstagram } from "react-icons/fa";
import Heading from '../common/Heading'
import Flex from '../common/Flex'


const Footer = () => {
  return (
    <>
    <div className="bg-darkText py-10">
      <Container>
        <div className="flex items-center gap-x-20">
          <Image className={'w-[300px]'} imgSrc={logo} imgAlt={'logo.png'}/>
          <Heading className={'text-2xl font-semibold text-lightText'} text={'JOIN THE CLUB FOR EXCLUSIVE OFFERS'} as={'h3'}/>
        </div>
      <div className='flex justify-between pt-5'>
        <div className="w-[24%] pl-5">
          <p className='text-sm text-gray-400 font-medium'> Founding the principle that true style embodies character. BD
            clothes the best modern collection and style for everyone.</p>
          <div className="flex space-x-4 pt-4">
            <Link><FaFacebookF className='text-white size-4'/></Link>
            <Link><FaTwitter className='text-white size-4'/></Link>
            <Link><FaInstagram className='text-white size-4' /></Link>
          </div>
        </div>
        <div className="w-[24%]">
           <Heading className={'text-lg font-medium text-accent'} text={'QUICKLINKS'} as={'h3'}/>
          <h4 className="font-bold text-white mb-4"></h4>
            <ul className='flex flex-col gap-y-3'>
              {[
                {name: "Shop", path:'/'},
                {name: "Contact", path:'/'},
                {name: "Return Policy", path:'/'}
              ].map((item, index)=>(
                <li key={index}><Link to={item.path} className='text-lightText text-base  hover:text-accent transition'>{item.name}</Link></li>
              ))}
            </ul>
        </div>


        <div className="w-[24%]">
          <Heading className={'text-lg font-medium text-accent'} text={'CUSTOMER SUPPORT'} as={'h3'}/>
          <ul className='flex flex-col gap-y-3 pt-3'>
              {[
                {name: "Help Center Info", path:'/'},
                {name: "Shipping Policy", path:'/'},
                {name: "Terms &amp; Conditions", path:'/'},
              ].map((item, index)=>(
                <li key={index}><Link to={item.path} className='text-lightText text-base hover:text-accent transition'>{item.name}</Link></li>
              ))}
            </ul>
        </div>

        <div className="w-[24%]">
          <Heading className={'text-base text-gray-500 font-bold text-right'} text={'GET 10% OFF'} as={'h4'}/>
          <Heading className={'text-sm text-gray-500 font-bold text-right'} text={'TODAY / FAST ORDER'} as={'h5'}/>
          <div className="flex items-center gap-x-3 pt-5">
            <input className='px-6 py-2 text-white text-base placeholder:text-lightText border-accent border-2 rounded placeholder:text-base focus:outline-0' type="text" placeholder='Email Address for Newsletter' />
            <Button btnText={'subscribe'}/>
          </div>
        </div>
      </div>
      <div className="">
         <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p>© Copyright 2025 Zarhan BD. All Rights Reserved.</p>
        <div className="flex space-x-3 mt-3 sm:mt-0">
          <span className="text-gray-400">Visa</span>
          <span className="text-gray-400">MasterCard</span>
          <span className="text-gray-400">Nagad</span>
        </div>
      </div>
      </div>

    </Container>
    </div>
    </>
  )
}

export default Footer