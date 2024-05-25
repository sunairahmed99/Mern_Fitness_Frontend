import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchsupport = createAsyncThunk(
    'support/fetch',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/supportsystem/All',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const fetchsupportadmin = createAsyncThunk(
    'support/fetchadmin',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/supportsystem/Alladmin',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const createsupport = createAsyncThunk(
    'support/create',
    async ({data,token},rejectWithValue) => {

        try{
            
            const response = await axios.post('http://localhost:9000/supportsystem/Add',data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

  export const delsupport = createAsyncThunk(
    'support/delete',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.delete(`http://localhost:9000/supportsystem/Delete/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            return rejectWithValue(error)
        }
    },
  )

const initialState = {

     support: [],
     loading:true,
     error:false,
     errmsg:null

  }

const supportSlice = createSlice({
  name: 'supports',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(fetchsupport.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchsupport.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.support = action.payload
      })
    .addCase(fetchsupport.rejected, (state, action) => {
    state.loading = false
    state.error = true
    state.errmsg = action.payload
    })  
    .addCase(fetchsupportadmin.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.support = action.payload
    })
    .addCase(createsupport.pending, (state) => {
        state.loading = true
      })
      .addCase(createsupport.fulfilled, (state, action) => {
          state.loading = false
          state.error = false
          state.support.push(action.payload)
        })
      .addCase(createsupport.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.errmsg = action.payload
      })
    .addCase(delsupport.fulfilled, (state, action) => {
    state.loading = false
    state.error = false
    let index = state.support.findIndex(el => el._id === action.payload._id)
    state.support.splice(index,1)
    }) 
  },
})

export const { increment} = supportSlice.actions
export const supportdata = state => state.supports
export default supportSlice.reducer