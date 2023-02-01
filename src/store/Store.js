import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../store/HomeSlice.js'

export default configureStore({
  reducer: {
    home: homeSlice
  },
})