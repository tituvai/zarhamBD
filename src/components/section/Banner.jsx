import Slider from "react-slick";
import Heading from '../common/Heading'
import Container from '../common/Container'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrivArrow";
import { useEffect, useState } from "react";
import axios from "axios";


const Banner = () => {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

    const [sliderApi, setSliderApi]=useState([])
      useEffect(() => {
    async function allProduct() {
      try {
        const response = await axios.get('https://www.zarhan.com.bd/api/sliders')
        // console.log("API response:", response.data) 

        const slider = response.data?.data || []
        setSliderApi(slider)
      } catch (error) {
        console.error("API Error:", error)
      }
    }

    allProduct()
  }, [])
  return (
    <>
      <div className="overflow-hidden">
          <Slider {...settings}>
            {sliderApi.map((item)=>(
                  <div>
            <Link to={'/'}>
            <div className=' bg-no-repeat bg-center bg-cover py-50' style={{ backgroundImage: `url(${item.image})` }}>
            <Container className={'relative px-3'}>
                <Heading className={'text-5xl text-darkText font-bold'} text={item.title} as={'h1'}/>
                <Heading className={'text-base text-darkText font-medium pt-5'} text={'Redefine Your Wardrobe'} as={'h3'}/>
                <Button className={'mt-5'} btnText={'Shop Now'}/>
            </Container>
            </div>
        </Link>
        </div>
          ))}
       
       
      
      {/* <div>
        <Link to={'/'}>
    <div className='bg-[url("/src/assets/banner.jpg")] bg-no-repeat bg-center bg-cover py-50'>
    <Container className={'relative px-3'}>
        <Heading className={'text-5xl text-darkText font-bold'} text={'STYLE IS CHARACTER'} as={'h1'}/>
        <Heading className={'text-base text-darkText font-medium pt-5'} text={'Redefine Your Wardrobe'} as={'h3'}/>
        <Button className={'mt-5'} btnText={'Shop Now'}/>
    </Container>
    </div>
</Link>
      </div> */}
    </Slider>
    </div>

    </>
  )
}

export default Banner