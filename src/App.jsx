
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Home from './components/pages/Home'
import ShopDetails from './components/pages/ShopDetails'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import Confirmation from './components/pages/Confirmation'
import { WishList } from './components/pages/WishList'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/shopDetails' element={<ShopDetails/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shopDetails' element={<ShopDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishList' element={<WishList/>}/>
      <Route path='/confirmation' element={<Confirmation/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
