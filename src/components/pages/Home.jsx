import React from 'react'
import Banner from '../section/Banner'
import Derybely from '../section/Derybely'
import Catagori from '../section/Catagori'
import NewArrival from '../section/NewArrival'
import Founder from '../section/Founder'
import CustomerReview from '../section/CustomerReview'
import Featured from '../section/Featured'
import TrendingProduct from '../section/TrendingProduct'
import HotProduct from '../section/HotProduct'


const Home = () => {
  return (
    
    <>
    <Banner/>
    <Derybely/>
    <Catagori/>
    <NewArrival/>
    <HotProduct/>
    <Featured/>
    <TrendingProduct/>
    <Founder/>
    <CustomerReview/>
    </>
  )
}

export default Home