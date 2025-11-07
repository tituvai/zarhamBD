import React from 'react'
import Image from '../common/Image'
import Heading from '../common/Heading'
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import panjabiThree from '/src/assets/panjabiThree.jpg'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch } from 'react-redux';

const Product = ({productSrc, ProductAlt, productDelete, productPrice, productTitle}) => {
  return (

//       const dispatch = useDispatch()

//   const AddToHandle = ()=>{
//     setCartActive(!cartActive)
//     dispatch(addCart({
//       image : productSrc,
//       title : productTitle,
//       price : productPrice, 
//       quantity : 1
//     }))
    
//   }
    <>
    <div className="">
            <div className="relative group hover:bg-white hover:shadow-2xl">
                <div className="w-full group relative">
                    <Image imgSrc={productSrc} imgAlt={ProductAlt}/>
                    <Image className={'opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-all duration-[1s]'} imgSrc={panjabiThree} imgAlt={"panjabiThree.jpg"}/>
                    <div className="absolute left-1/2 -translate-x-1/2 transition-all bottom-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-[1s] flex items-center gap-x-5">
                    <div className="p-3 py-2 bg-white rounded"><AiOutlineShoppingCart className='text-accent size-7  cursor-pointer'/></div>
                    <div className="p-3 py-2 bg-white rounded"><MdOutlineRemoveRedEye className='text-accent size-7  cursor-pointer'/></div>
                </div>
                </div>
                <div className="p-4">
                    <Heading className={'text-lg text-darkText font-medium py-3'} text={productTitle} as={'h4'}/>
                    <div className="flex justify-between">
                        <Heading text={<><del className='text-red-500'>{productDelete}</del> <span>{productPrice}</span></>} as={'h5'}/>
                        <Heading text={'30%'} as={'h5'}/>
                    </div>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 hover:transition-all duration-[1s]">
                    <div className="p-3 py-2 bg-white rounded"><FaRegHeart className='text-accent size-7  cursor-pointer'/></div>   
                </div>
                
            </div>
    </div>
    </>
  )
}

export default Product