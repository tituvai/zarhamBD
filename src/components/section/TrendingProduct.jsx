import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../common/NextArrow'
import PrevArrow from '../common/PrivArrow'
import Heading from '../common/Heading';
import Product from './Product';

const TrendingProduct = () => {

       // react slick Slider Start

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
     nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    // react slick Slider End

      const [trendingApi, setTrendingApi]=useState([])
         useEffect(() => {
        async function allProduct() {
          try {
            const response = await axios.get('https://www.zarhan.com.bd/api/products/trending')
            // console.log("API response:", response.data) 
    
            const trending = response.data?.data || []
            setTrendingApi(trending)
          } catch (error) {
            console.error("API Error:", error)
          }
        }
    
        allProduct()
      }, [])


  return (
    <>
    <div className="">
        <Container>
         <div className="">
              <Heading className={'text-4xl text-darkText font-semibold text-center pb-10'} text={'Trending Product'} as={'h3'}/>
            </div>
            <Slider {...settings} className='xm-4'>
                {trendingApi.map((item, index)=>(
                <div key={item.id || index} className="w-[49%] lg:w-[24%] px-2">
                <Product productSrc={item.featured_image} hoverSrc={item.hover_image}  productPrice={'320'} productTitle={item.name} />
                </div>
                ))}   
            </Slider>
        </Container>
    </div>
    </>
  )
}

export default TrendingProduct