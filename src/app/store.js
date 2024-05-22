import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../components/User/userSlice'
import NutritionReducer from '../components/Nutritions/nutritionSlice'
import progressReducer from '../components/Fprogress/fprogressslice'

const store = configureStore({
    reducer:{

        users: UserReducer,
        nutritions:NutritionReducer,
        progresses:progressReducer

    }
  
});

export default store;