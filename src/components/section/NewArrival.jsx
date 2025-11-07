import React from 'react'
import Container from '../common/Container'
import Product from './Product'
import panjabi from '/src/assets/panjabi.jpg'
import panjabiOne from '/src/assets/shirt.jpg'
import shirt from '/src/assets/panjabiOne.jpg'
import panjabiTwo from '/src/assets/panjabiTwo.jpg'
import Flex from '../common/Flex'
import Heading from '../common/Heading'
import Button from '../common/Button'

const NewArrival = () => {
  return (
    <>
    <div className="py-15 px-2">
        <Container>
            <div className="">
                <Heading className={'text-4xl text-darkText font-semibold text-center pb-10'} text={'New Arrival'} as={'h3'}/>
            </div>
            <Flex className={'flex-wrap gap-y-5'}>
                <div className="w-[49%] lg:w-[24%]">
                    <Product productSrc={panjabi} ProductAlt={'shirt.png'} productPrice={340} productTitle={'Men Solid full sleeve cotton'} />
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Product productSrc={shirt} ProductAlt={'shirt.jpg'} productPrice={540} productTitle={'Men Solid  sleeve cotton'} />
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Product productSrc={panjabiOne} ProductAlt={'shirt.png'} productPrice={140} productTitle={'Men sleeve cotton'} />
                </div>
                <div className="w-[49%] lg:w-[24%]">
                    <Product productSrc={panjabiTwo} ProductAlt={'shirt.png'} productPrice={240} productTitle={'Men Solid full sleeve'} />
                </div>
            </Flex>
            <div className="flex justify-center pt-10">
                <Button btnText={'View All'}/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default NewArrival