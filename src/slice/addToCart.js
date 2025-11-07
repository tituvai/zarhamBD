import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'addToCart',
  initialState: {
    value: [],
  },
  reducers: {
     addCart: (state, action) => {
        let alldata= state.value.find(item=>item.title===action.payload.title)
        if(alldata){
            alldata.quantity += 1;
            
        }else{
            state.value.push({...action.payload, quantity:1})
            
        }
},

// Count Part Start 

cartIncement: (state, action)=>{
    state.value.map((item)=>{
        if(item.title === action.payload.title){
            item.quantity +=1;
        }
    })
},
cartDicement:(state, action)=>{
    state.value.map((item)=>{
        if(item.title===action.payload.title && item.quantity >1){
            item.quantity -=1;
        }
    })
},

// remove Button part Start 

 removeBtn:(state, action)=>{
      state.value= state.value.filter(item=> item.title !== action.payload)
    }

  }
})

export const {addCart, cartIncement, cartDicement, removeBtn} = addToCart.actions

export default addToCart.reducer