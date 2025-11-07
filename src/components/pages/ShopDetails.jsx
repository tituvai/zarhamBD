import React, { useState } from 'react'
import Container from '../common/Container';
import Heading from '../common/Heading';
import Peragrap from '../common/Peragrap'; // Assuming 'Peragrap' is your custom paragraph component
import Product from '../section/Product';
import Button from '../common/Button';
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../common/NextArrow';
import PrevArrow from '../common/PrivArrow'; // Assuming 'PrivArrow' is your custom PrevArrow component
import shirt from '/src/assets/shirt.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../slice/addToCart';

const ShopDetails = () => {
    // ********************************************

    const images = [shirt, shirt, shirt, shirt ];

    const settings = {
        customPaging: function (i) {
            return (
                <a className=""><img src={images[i]} alt={`thumb-${i}`}/></a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb custom-thumb", 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Related Products Slider Settings
    var settingsTwo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    nextArrow: null,
                    prevArrow: null
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: null,
                    prevArrow: null
                }
            }
        ]
    };

    // State for selected options
    const [selectedsize, setSelectedsize]= useState('s')
    const [selectedColor, setSelectedColor]= useState('#000000') 

    // Quantity counter logic
    const [count, setCount]=useState(1)

    const handleIncement = ()=>{
        setCount(count + 1)
    }

    const handleDecement= ()=>{
        if(count > 1){
            setCount(count-1)
        }
    }

    // Product Detalis Part Start Slice

    const products = useSelector((state)=>state.productDetails.value)

    const dispatch = useDispatch()

    const handleAddToCart = ()=>{
    dispatch(addCart({title:products.title, price: products.price, image:products.image, size: selectedsize}))
    console.log('Clicked');
    
    }
    
    return (
        <>
            <div className="px-3 lg:px-0 my-25">
                <Container>
                    <div className="lg:flex justify-between">
                        <div className="lg:w-[50%] pb-10 lg:pb-0 ">
                            <div className="slider-container lg:pl-30 z-40 "> 
                                <Slider {...settings} className="">
                                    {images.map((img, index) => ( 
                                        <div key={index}>
                                            <img className="w-full h-[600px] object-cover" src={products.image} alt={`slide-${index}`}/>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                        {/* --------------------- Product Details (Right Side) --------------------- */}
                        <div className="lg:w-[46%]">
                            <div className="">
                                {/* Breadcrumbs */}
                                <span className="text-base text-menuC font-medium uppercase">Home</span>
                                <span>/</span>
                                <span className="text-base text-menuC font-medium uppercase">The Shop</span>
                            </div>
                            <Heading className={'text-[26px] text-menuC pt-5'} text={products.title} as={'h4'}/>
                            <Heading className={'text-[22px] text-menuC font-medium pb-5'} text={products.price} as={'h4'}/>
                            <Peragrap className={'leading-6'} peraText={'Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.'}/>
                            
                            {/* Sizes */}
                            <div className="flex flex-wrap gap-y-5 items-center gap-x-5 pt-8">
                                <Heading className={'text-base text-menuC font-medium lg:pr-10'} text={'SIZES'} as={'h6'}/>
                                {['xs', 's', 'm', 'l', 'xl', 'xxl'].map((size) => (
                                    <div
                                        key={size}
                                        className={`text-base text-darkText w-[40px] h-[40px] flex items-center justify-center border-2 border-accent cursor-pointer ${
                                            selectedsize === size ? 'ring-2 ring-offset-2 ring-accent' : ''
                                        }`}
                                        onClick={() => setSelectedsize(size)}
                                    >{size}</div>
                                ))}
                            </div>

                            {/* Colors */}
                            <div className="flex items-center gap-x-5 pt-8">
                                <Heading className={'text-base text-darkText font-medium lg:pr-10'} text={'COLOR'} as={'h6'}/>
                                {['#000000', '#FF8686', '#7ED321', '#B6B6B6', '#15CBA5'].map((color) => (
                                    <div
                                        key={color}
                                        className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                                            selectedColor === color ? 'ring-2 ring-offset-2 ring-accent' : ''
                                        }`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    ></div>
                                ))}
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="lg:flex items-center gap-x-10 pt-8">
                                {/* Quantity Counter */}
                                <div className="w-[100px] p-2 border-2 border-categoriC flex justify-between items-center">
                                    <span className="text-base text-darkText font-medium cursor-pointer" onClick={handleIncement}>+</span>
                                    <span className="text-base text-darkText font-medium">{count}</span>
                                    <span className="text-2xl text-darkText font-medium cursor-pointer" onClick={handleDecement}>-</span>
                                </div>
                                {/* Add to Cart Button */}
                                <div className=""><Button onClick={handleAddToCart} className={'px-18 mt-3 lg:mt-0'} btnText={'ADD TO CART'}/></div>
                            </div>

                            {/* Wishlist and Share */}
                            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10 pt-7">
                                <Button 
                                    className={'flex items-center lg:gap-x-2 w-[250px]'} 
                                    btnText={<><CiHeart className="text-xl"/><span>ADD TO WISHLIST</span></>}
                                />
                                <Heading 
                                    className={'flex items-center lg:gap-x-2 pt-5 lg:pt-0'} 
                                    text={<><IoShareSocialOutline/><span>SHARE</span></>} 
                                    as={'h4'}
                                />
                            </div>
                            
                            {/* SKU, Categories, Tags */}
                            <Heading className={'text-base text-darkText leading-7 pt-7'} text={<><span className="text-darkText pr-2">SKU :</span><span>N/A</span></>} as={'h5'}/>
                            <Heading className={'text-base text-darkText leading-7'} text={<><span className="text-darkText pr-2">Categories :</span><span>Casual & Urban Wear, Jackets, Men</span></>} as={'h5'}/>
                            <Heading className={'text-base text-darkText leading-7'} text={<><span className="text-darkText pr-2">Tags :</span><span>biker, black, bomber, leather</span></>} as={'h5'}/>
                        </div>
                    </div>

                    {/* --------------------- Product Tabs (Description, Info, Reviews) --------------------- */}
                    <div className="flex lg:items-center justify-center gap-x-5 lg:gap-x-20 pt-20">
                        {/* FIX: Corrected typo 'left-0-0' to 'left-0' for pseudo-element class */}
                        <Heading className={'text-base text-darkText font-medium relative group'} text={<><span className="w-0 h-[2px] bg-darkText group-hover:w-full absolute left-0 bottom-0 transition-all duration-500"></span><span>DESCRIPTION</span></>} as={'h4'}/>
                        <Heading className={'text-base text-darkText font-medium relative group'} text={<><span className="w-0 h-[2px] bg-darkText group-hover:w-full absolute left-0 bottom-0 transition-all duration-500"></span><span>ADDITIONAL INFORMATION</span></>} as={'h4'}/>
                        <Heading className={'text-base text-darkText font-medium relative group'} text={<><span className="w-0 h-[2px] bg-darkText group-hover:w-full absolute left-0 bottom-0 transition-all duration-500"></span><span>REVIEWS (3)</span></>} as={'h4'}/> 
                    </div>

                    {/* --------------------- Description Content --------------------- */}
                    <div className="lg:w-[940px] m-auto pt-15">
                        <Heading className={'text-base text-accent font-medium pb-5'} text={'Sed do eiusmod tempor incididunt ut labore'} as={'h6'}/>
                        <Peragrap peraText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}/>
                        
                        <div className="lg:flex items-start justify-between pt-15">
                            {/* Product Features List */}
                            <div className="">
                                <Heading className={'text-base text-accent font-medium pb-5'} text={'Why choose product?'} as={'h6'}/>
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Creat by cotton fibric with soft and smooth</span></>}/> 
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Simple, Configurable (e.g. size, color, etc.), bundled</span></>}/> 
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><div className="w-[10px] h-[10px] bg-categoriC rounded-full"></div><span>Downloadable/Digital Products, Virtual Products</span></>}/> 
                            </div>
                            
                            {/* Sample Number List */}
                            <div className="">
                                <Heading className={'text-base text-accent font-medium pb-5 pt-5 lg:pt-0'} text={'Sample Number List'} as={'h6'}/>
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>1</span><span>Create Store-specific attrittbutes on the fly</span></>}/> 
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>2</span><span>Simple, Configurable (e.g. size, color, etc.), bundled</span></>}/> 
                                <Peragrap className={'flex items-center gap-x-2 leading-7.5'} peraText={<><span>3</span><span>Downloadable/Digital Products, Virtual Products</span></>}/> 
                            </div>
                        </div>

                        {/* Lining Detail */}
                        <Heading className={'text-base text-accent font-medium pt-10 pb-2'} text={'Lining'} as={'h6'}/>
                        <Peragrap peraText={'100% Polyester, Main: 100% Polyester.'}/>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ShopDetails