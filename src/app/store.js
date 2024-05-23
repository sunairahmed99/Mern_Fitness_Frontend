import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../components/User/userSlice'
import NutritionReducer from '../components/Nutritions/nutritionSlice'
import progressReducer from '../components/Fprogress/fprogressslice'
import supportReducer from '../components/Support/supportSlice'
import alluserReducer from '../components/Admin/allUserSlice'

const store = configureStore({
    reducer:{

        users: UserReducer,
        nutritions:NutritionReducer,
        progresses:progressReducer,
        supports:supportReducer,
        allusers:alluserReducer

    }
  
});

export default store;