import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
  cartItems:localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")):[]
  },
  reducers: {
   cartTotal:(state,action)=>{
        
      // state.cartItems.push(action.payload)
       const findIndex = state . cartItems.findIndex((item) => item.id == action.payload.id)
       console.log(findIndex);
       if(findIndex >= 0){
       state.cartItems[findIndex]. cartQun += 1

       }else{
        state.cartItems.push({...action.payload, cartQun: 1})
       }

       
       localStorage.setItem("cartDetails",JSON.stringify({...action.payload}))
        
        

    }
     
  }
})

export const {cartTotal} = CartSlice .actions

export default CartSlice.reducer