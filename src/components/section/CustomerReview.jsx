import Slider from "react-slick";
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import shirt from '/src/assets/shirt.jpg'
import Heading from '../common/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrivArrow";


const CustomerReview = () => {

     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow:null,
          prevArrow:null
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow:null,
          prevArrow:null
        }
      }
    ]
  };
  return (
    <>
    <div className="pb-3 pt-10">
       
        <Container>
            <div className="">
                <Heading className={'text-4xl text-darkText font-semibold text-center pb-10'} text={'Customer Reviews'} as={'h3'}/>
            </div>
            
                 <Slider {...settings} className="mx-2">
      
                <div className="px-2">
                        <div className=" bg-darkText lg:p-5 p-3 rounded">
                    <Flex className={'flex-col lg:flex-row'}>
                        <div className="lg:w-[45%]">
                            <Image className={'lg:w-[200px] lg:h-[250px] border-4 border-accent rounded-2xl'} imgSrc={shirt} imgAlt={'shirt.jpg'}/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Heading className={'lg:text-xl text-base text-lightText font-bold'} text={'Your Voice'} as={'h3'}/>
                            <Heading className={'lg:text-2xl text-xl text-accent font-bold uppercase pb-2'} text={'MATTERS'} as={'h3'}/>
                            <div className="bg-white rounded p-3">
                                <p className='text-sm text-darkText font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque error minima natus temporibus commodi dolorem saepe,</p>
                            </div>
                            <div className="pt-2">
                                <Heading className={'lg:text-base text-sm font-semibold text-white bg-accent inline px-3 py-1 rounded-tr-xl rounded-bl-xl'} text={'Tanvir'} as={'h5'}/>
                            </div>
                        </div>
                    </Flex>
                </div>
                    </div>
           

                {/* ====== */}

              
                  <div className="px-2">
                        <div className=" bg-darkText lg:p-5 p-3 rounded">
                    <Flex className={'flex-col lg:flex-row'}>
                        <div className="lg:w-[45%]">
                            <Image className={'lg:w-[200px] lg:h-[250px] border-4 border-accent rounded-2xl'} imgSrc={shirt} imgAlt={'shirt.jpg'}/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Heading className={'lg:text-xl text-base text-lightText font-bold'} text={'Your Voice'} as={'h3'}/>
                            <Heading className={'lg:text-2xl text-xl text-accent font-bold uppercase pb-2'} text={'MATTERS'} as={'h3'}/>
                            <div className="bg-white rounded p-3">
                                <p className='text-sm text-darkText font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque error minima natus temporibus commodi dolorem saepe,</p>
                            </div>
                            <div className="pt-2">
                                <Heading className={'lg:text-base text-sm font-semibold text-white bg-accent inline px-3 py-1 rounded-tr-xl rounded-bl-xl'} text={'Tanvir'} as={'h5'}/>
                            </div>
                        </div>
                    </Flex>
                </div>
                    </div>
              

                {/* ==== */}

                    <div className="px-2">
                        <div className=" bg-darkText lg:p-5 p-3 rounded">
                    <Flex className={'flex-col lg:flex-row'}>
                        <div className="lg:w-[45%]">
                            <Image className={'lg:w-[200px] lg:h-[250px] border-4 border-accent rounded-2xl'} imgSrc={shirt} imgAlt={'shirt.jpg'}/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Heading className={'lg:text-xl text-base text-lightText font-bold'} text={'Your Voice'} as={'h3'}/>
                            <Heading className={'lg:text-2xl text-xl text-accent font-bold uppercase pb-2'} text={'MATTERS'} as={'h3'}/>
                            <div className="bg-white rounded p-3">
                                <p className='text-sm text-darkText font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque error minima natus temporibus commodi dolorem saepe,</p>
                            </div>
                            <div className="pt-2">
                                <Heading className={'lg:text-base text-sm font-semibold text-white bg-accent inline px-3 py-1 rounded-tr-xl rounded-bl-xl'} text={'Tanvir'} as={'h5'}/>
                            </div>
                        </div>
                    </Flex>
                </div>
                    </div>

                    <div className="px-2">
                        <div className=" bg-darkText lg:p-5 p-3 rounded">
                    <Flex className={'flex-col lg:flex-row'}>
                        <div className="lg:w-[45%]">
                            <Image className={'lg:w-[200px] lg:h-[250px] border-4 border-accent rounded-2xl'} imgSrc={shirt} imgAlt={'shirt.jpg'}/>
                        </div>
                        <div className="lg:w-[49%]">
                            <Heading className={'lg:text-xl text-base text-lightText font-bold'} text={'Your Voice'} as={'h3'}/>
                            <Heading className={'lg:text-2xl text-xl text-accent font-bold uppercase pb-2'} text={'MATTERS'} as={'h3'}/>
                            <div className="bg-white rounded p-3">
                                <p className='text-sm text-darkText font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque error minima natus temporibus commodi dolorem saepe,</p>
                            </div>
                            <div className="pt-2">
                                <Heading className={'lg:text-base text-sm font-semibold text-white bg-accent inline px-3 py-1 rounded-tr-xl rounded-bl-xl'} text={'Tanvir'} as={'h5'}/>
                            </div>
                        </div>
                    </Flex>
                </div>
                    </div>
                
                
                </Slider>

        </Container>
    </div>
    </>
  )
}

export default CustomerReview