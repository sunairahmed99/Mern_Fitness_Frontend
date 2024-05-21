import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../components/User/userSlice'

const store = configureStore({
    reducer:{

        users: UserReducer,

    }
  
});

export default store;