import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import shirt from '/src/assets/shirt.png'
import Heading from '../common/Heading'
import { Link } from 'react-router-dom'

const Catagori = () => {
  return (
    <>
    <div className="">
        <Container>
            <div className="">
                <Heading className={'text-4xl text-darkText font-semibold text-center pb-5'} text={'Shop By Category'} as={'h3'}/>
            </div>
            <Flex className={'flex-wrap gap-y-4'}>
                <div className="w-[49%] lg:w-[24%]">
                    <Link to={'/'}>
                        <div className="relative group">
                        <Image imgSrc={shirt} imgAlt={"shirt.png"}/>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                    </div>
                    <Heading className={'text-2xl text-darkText font-medium uppercase text-center pt-3'} text={'shirts'} as={'h3'}/>
                    </Link>
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Link to={'/'}>
                        <div className="relative group">
                        <Image imgSrc={shirt} imgAlt={"shirt.png"}/>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                    </div>
                    <Heading className={'text-2xl text-darkText font-medium uppercase text-center pt-3'} text={'t-shirts'} as={'h3'}/>
                    </Link>
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Link to={'/'}>
                        <div className="relative group">
                        <Image imgSrc={shirt} imgAlt={"shirt.png"}/>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                    </div>
                    <Heading className={'text-2xl text-darkText font-medium uppercase text-center pt-3'} text={'Trousers'} as={'h3'}/>
                    </Link>
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Link to={'/'}>
                        <div className="relative group">
                        <Image imgSrc={shirt} imgAlt={"shirt.png"}/>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                        <div className="w-full h-[370px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                    </div>
                    <Heading className={'text-2xl text-darkText font-medium uppercase text-center pt-3'} text={'layers'} as={'h3'}/>
                    </Link>
                </div>

            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Catagori