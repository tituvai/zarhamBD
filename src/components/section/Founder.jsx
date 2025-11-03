import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import founder from '/src/assets/founder.png'
import Heading from '../common/Heading'
import Button from '../common/Button'

const Founder = () => {
  return (
    <>
    <div className="py-10 px-3">
        <Container>
            <Flex className={'flex-col lg:flex-row'}>
                <div className="lg:w-[48%]">
                    <Image className={'w-full h-[500px]'} imgSrc={founder} imgAlt={'founder.png'}/>
                </div>
                <div className="lg:w-[49%]">
                    <Heading className={'text-5xl text-darkText font-medium pb-10'} text={'Let Me Tell You A Story'} as={'h3'}/>
                    <p className='text-base text-gray-500 font-medium'>Indian Terrain was founded by Venky Rajagopal with the aim of providing men in India with premium smart-casual clothing. Indian Terrain was launched in 2000 and it de-merged from Celebrity Fashions Limited, the parent company, in 2010. Indian Terrain was founded by Venky Rajagopal with the aim of providing men in India with premium smart-casual clothing. Indian Terrain was launched in 2000 and it de-merged from Celebrity Fashions Limited, the parent company, in 2010.</p>
                    <Button className={'mt-10'} btnText={'Read more'}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Founder