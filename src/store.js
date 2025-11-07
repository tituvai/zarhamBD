import { configureStore } from '@reduxjs/toolkit'
import  addToCart  from './slice/addToCart'
import  productDetailSlice  from './slice/productDetailSlice'

export default configureStore({
  reducer: {
    cart: addToCart,
    productDetails: productDetailSlice,
  },
})