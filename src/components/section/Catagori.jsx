import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import shirt from '/src/assets/shirt.png'
import Heading from '../common/Heading'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Catagori = () => {

    const [catagoriApi, setCatagoriApi]=useState([])
     useEffect(() => {
    async function allProduct() {
      try {
        const response = await axios.get('https://www.zarhan.com.bd/api/categories')
        
        console.log("API response:", response.data) 

        const categories = response.data?.data || []
        const childCategories = categories.filter(cat => cat.parent_id)
      setCatagoriApi(childCategories.slice(0, 3))
      } catch (error) {
        console.error("API Error:", error)
      }
    }

    allProduct()
  }, [])
  return (
    <>
    <div className="px-2">
        <Container>
            <div className="">
                <Heading className={'text-4xl text-darkText font-semibold text-center pb-5'} text={'Shop By Category'} as={'h3'}/>
            </div>
          
                <Flex className={'flex-wrap gap-y-5'}>
                {catagoriApi?.map((item) => (
                <div className="w-[49%] lg:w-[32%]  h-[420px]" key={item.id}>
                <Link to={'/'}>
                    <div className="relative group">
                    <Image className={'w-full h-[420px]'} imgSrc={item.image} />
                    <div className="w-full h-[420px] bg-white opacity-15 absolute top-0 left-0 scale-x-0 group-hover:scale-x-100 duration-700"></div>
                    <div className="w-full h-[420px] bg-white opacity-15 absolute top-0 left-0 scale-y-0 group-hover:scale-y-100 duration-700"></div>
                    </div>
                    <Heading
                    className={'text-2xl text-darkText font-medium uppercase text-center pt-3'}
                    text={item.name}
                    as={'h3'}
                    />
                </Link>
                </div>
                ))}
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Catagori