import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Product from '../section/Product'
import axios from 'axios'
import Heading from '../common/Heading'
import { IoMdStar } from "react-icons/io";

const Shop = () => {

    const [apProduct, setApProduct]=useState([])
  useEffect(()=>{
    async function allProduct(){
      let data = await axios.get('https://tituvai.github.io/E-comeApi/Product/index.json')
     
      setApProduct(data.data.data.slice(0, 9))
      
      
    }
    allProduct()
  })

//   Color Part Start 
const [selectedColor, setSelectedColor]= useState('')
 

  const [color, setColor]=useState(true)

  const heandleColor = ()=>{
  setColor(!color)
  }

//   Color Part End

// Filter Part Start 

const [filter, setFilter] = useState(false)
const handleFilterBtn = ()=>{
    setFilter(!filter)
}
// Filter Part End
  return (
    <>
    <div className="py-10 bg-lightText">
        <Container>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className="lg:w-[30%] ">
                    <Heading className={'hidden lg:block text-xl text-darkText font-semibold border-b-2 border-stone-200 pb-5'} text={'Filter Opction'} as={'h4'}/>
                     <div className="hidden lg:block">
                        <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Category'} as={'h4'}/>

                        <div className="py-2">
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'panjabi'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Bags'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Orraments'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Shoes'} as={'h4'}/>
                            </div>

                        </div>
                        {/* Brand Part Start  */}

                        <div className="">
                             <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Brand'} as={'h4'}/>
                             <div className="pt-2 pl-10">
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                             </div>
                        </div>

                        {/* Brand Part End */}

                        {/* Customer Rating Part Start  */}

                        <div className="">
                             <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Customer Rating'} as={'h4'}/>
                             <div className="flex items-center gap-x-2 pt-3">
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                             </div>
                        </div>
                        {/* Customer Rating Part End */}

                    {/* color Part Start  */}

                    <div className="flex  items-center justify-between pt-5">
                    <Heading className={'text-darkText text-lg font-semibold'} text={'COLOR'} as={'h4'}/>
                    </div>
                    {color && <div className="w-[70%] flex items-center gap-x-4 flex-wrap py-8 gap-y-5">
                    {['#0A2472', '#D7BB4F', '#282828', '#B1D6E8', '#9C7539', '#D29B48', '#E6AE95', '#BABABA', '#D76B67', '#BFDCC4'].map((colorItem) => (
                        <div
                        key={colorItem}
                        className={`w-[20px] h-[20px] rounded-full ${
                            selectedColor === colorItem ? 'ring-2 ring-offset-2 ring-yellow-500' : ''
                        }`}
                        style={{ backgroundColor: colorItem }}
                        onClick={() => selectedColor(colorItem)}
                        ></div>
                        ))}
                    </div>}
                    {/* color Part End */}

                    {/* Price Range Part Start  */}

                    <div className="">
                        <Heading className={'text-lg text-darkText font-medium pt-5 pb-4'} text={'Price Range'} as={'h4'}/>
                        <div className="w-[300px] h-[4px] bg-accent relative"><div className="w-4 h-4 rounded-full bg-accent absolute top-1/2 left-20 -translate-1/2"></div>
                        <div className="flex justify-between items-center pt-3">
                            <span className='text-base text-darkText font-medium'>120tk</span>
                            <span className='text-base text-darkText font-medium'>2220tk</span>
                        </div>
                        </div>
                    </div>
                    {/* Price Range Part End */}

                     </div>

                     {/* mobile Part Start  */}
                        <span onClick={handleFilterBtn} className='lg:hidden'>ffhdgfkh</span>
                        {filter &&<div className="bg-white rounded-xl p-5">
                        <Flex>
                            <div className="py-2">
                                <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Category'} as={'h4'}/>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'panjabi'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Bags'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Orraments'} as={'h4'}/>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <div className="w-[13px] h-[13px] border-2 border-gray-300 hover:border-accent"></div>
                            <Heading className='text-base text-darkText font-medium leading-10' text={'Shoes'} as={'h4'}/>
                            </div>

                        </div>
                        {/* Brand Part Start  */}

                        <div className="">
                             <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Brand'} as={'h4'}/>
                             <div className="pt-2 pl-10">
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                                <Heading className={'text-base text-darkText font-medium leading-8'} text={'Relstenl Rabr'} as={'h5'}/>
                             </div>
                        </div>
                        </Flex>

                        {/* Brand Part End */}

                        {/* Customer Rating Part Start  */}

                        <div className="">
                             <Heading className={'text-lg text-darkText font-medium pt-5'} text={'Customer Rating'} as={'h4'}/>
                             <div className="flex items-center gap-x-2 pt-3">
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                                <IoMdStar className='text-yellow-500 size-5'/>
                             </div>
                        </div>
                        {/* Customer Rating Part End */}

                    {/* color Part Start  */}

                    <div className="flex  items-center justify-between pt-5">
                    <Heading className={'text-darkText text-lg font-semibold'} text={'COLOR'} as={'h4'}/>
                    </div>
                    {color && <div className="w-[70%] flex items-center gap-x-4 flex-wrap py-8 gap-y-5">
                    {['#0A2472', '#D7BB4F', '#282828', '#B1D6E8', '#9C7539', '#D29B48', '#E6AE95', '#BABABA', '#D76B67', '#BFDCC4'].map((colorItem) => (
                        <div
                        key={colorItem}
                        className={`w-[20px] h-[20px] rounded-full ${
                            selectedColor === colorItem ? 'ring-2 ring-offset-2 ring-yellow-500' : ''
                        }`}
                        style={{ backgroundColor: colorItem }}
                        onClick={() => selectedColor(colorItem)}
                        ></div>
                        ))}
                    </div>}
                    {/* color Part End */}

                    {/* Price Range Part Start  */}

                    <div className="">
                        <Heading className={'text-lg text-darkText font-medium pt-5 pb-4'} text={'Price Range'} as={'h4'}/>
                        <div className="w-[300px] h-[4px] bg-accent relative"><div className="w-4 h-4 rounded-full bg-accent absolute top-1/2 left-20 -translate-1/2"></div>
                        <div className="flex justify-between items-center pt-3">
                            <span className='text-base text-darkText font-medium'>120tk</span>
                            <span className='text-base text-darkText font-medium'>2220tk</span>
                        </div>
                        </div>
                    </div>
                    {/* Price Range Part End */}

                     </div>}
                     {/* mobile Part End */}
                  

                </div>
                <div className="lg:w-[60%]">
                    <div className="bg-white p-2 lg:p-4 mb-3 rounded ">
                        <Flex>
                            <div className="">
                                <Heading className={'text-xs'} text={'View Toggle'} as={'h6'}/>
                            </div>
                            <div className="flex gap-x-10">
                                <span className='text-sm text-darkText font-medium'>Sort  |</span>
                                <Heading className={'text-sm text-stone-400 font-normal'} text={'Newest: Price Low > High'} as={'h5'}/>
                            </div>
                        </Flex>
                    </div>
                <Flex className={'flex-wrap gap-y-5'}>
                    {apProduct.map((item)=>(
                        <div className="w-[48%] lg:w-[32%]"><Product productTitle={item.title} productSrc={item.image} productPrice={item.price}/></div>
                    )) }
                </Flex>
                </div>
            </div>

        </Container>
    </div>
    </>
  )
}

export default Shop