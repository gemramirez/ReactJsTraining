import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
// type Props = {}

const Store= configureStore( {
    reducer:{
        user:userReducer
    }
  })

export default Store;