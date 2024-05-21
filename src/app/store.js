import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../components/User/userSlice'
import NutritionReducer from '../components/Nutritions/nutritionSlice'

const store = configureStore({
    reducer:{

        users: UserReducer,
        nutritions:NutritionReducer

    }
  
});

export default store;