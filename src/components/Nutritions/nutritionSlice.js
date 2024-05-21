import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchNutrition = createAsyncThunk(
    'nutrition/fetch',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/nutrition/All',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data)
            return response.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const fetchgetNutrition = createAsyncThunk(
    'nutrition/fetchget',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.get(`http://localhost:9000/nutrition/get/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data)
            return response.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const createNutrition = createAsyncThunk(
    'nutrition/create',
    async ({data,token},rejectWithValue) => {

        try{
            
            const response = await axios.post('http://localhost:9000/nutrition/Add',data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data)
            return response.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const updateNutrition = createAsyncThunk(
    'nutrition/update',
    async ({id,data,token},rejectWithValue) => {

        try{
            
            const response = await axios.patch(`http://localhost:9000/nutrition/Update/${id}`,data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data)
            return response.data.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const delNutrition = createAsyncThunk(
    'nutrition/delete',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.delete(`http://localhost:9000/nutrition/Delete/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data)
            return response.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

const initialState = {

     nutrition:[],
     loading:true,
     error:false,
     errmsg:null

  }

const nutritionSlice = createSlice({
  name: 'nutritions',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(fetchNutrition.pending, (state) => {
      state.loading = true
      state.error = false
    })
    .addCase(fetchNutrition.fulfilled, (state, action) => {

        state.loading = false
        state.error = false
        state.nutrition = action.payload
    })
    .addCase(fetchNutrition.rejected, (state, action) => {
        state.error = true
        state.errmsg = action.payload
    })
    .addCase(fetchgetNutrition.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchgetNutrition.fulfilled, (state, action) => {
  
          state.loading = false
          state.error = false
          state.nutrition = action.payload
      })
      .addCase(fetchgetNutrition.rejected, (state, action) => {
          state.error = true
          state.errmsg = action.payload
      })
    .addCase(createNutrition.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createNutrition.fulfilled, (state, action) => {
  
          state.loading = false
          state.error = false
          state.nutrition.push(action.payload)
      })
      .addCase(createNutrition.rejected, (state, action) => {
          state.error = true
          state.errmsg = action.payload
      })
      .addCase(updateNutrition.fulfilled, (state, action) => {
  
        state.loading = false
        state.error = false
        state.nutrition = action.payload
    })

      .addCase(delNutrition.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(delNutrition.fulfilled, (state, action) => {
  
          state.loading = false
          state.error = false
          let index = state.nutrition.findIndex(el => el._id === action.payload._id)
          state.nutrition.splice(index,1)
      })
      .addCase(delNutrition.rejected, (state, action) => {
          state.error = true
          state.errmsg = action.payload
      })
  },
})

export const { increment} = nutritionSlice.actions
export const nutritiondata = state => state.nutritions
export default nutritionSlice.reducer