import { configureStore } from '@reduxjs/toolkit'
import  cartSlice from './slice/CartSlice'

export default configureStore({
  reducer: {
    cartDetails:cartSlice
  }
})