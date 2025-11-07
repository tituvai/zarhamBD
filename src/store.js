import { configureStore } from '@reduxjs/toolkit'
import  addToCart  from './slice/addToCart'

export default configureStore({
  reducer: {
    cart: addToCart,
  },
})