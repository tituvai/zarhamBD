import { createSlice } from '@reduxjs/toolkit'

export const productDetailSlice = createSlice({
  name: 'productDetails',
  initialState: {
    value: '',
  },
  reducers: {
     productDetails: (state, action) => {
        state.value = {...action.payload}
     }
        





  }
})

export const {productDetails} = productDetailSlice.actions

export default productDetailSlice.reducer

