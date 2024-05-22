import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../components/User/userSlice'
import NutritionReducer from '../components/Nutritions/nutritionSlice'
import progressReducer from '../components/Fprogress/fprogressslice'
import supportReducer from '../components/Support/supportSlice'

const store = configureStore({
    reducer:{

        users: UserReducer,
        nutritions:NutritionReducer,
        progresses:progressReducer,
        supports:supportReducer

    }
  
});

export default store;