import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getallprogress = createAsyncThunk(
    'progress/getall',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/fitnessprogress/All',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )

  export const getallprogressadmin = createAsyncThunk(
    'progress/getalladmin',
    async (token,rejectWithValue) => {

        try{
          console.log('hello')
            
            const response = await axios.get('http://localhost:9000/fitnessprogress/Alladmin',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response)
            return response.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )

  export const getprogress = createAsyncThunk(
    'progress/get',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.get(`http://localhost:9000/fitnessprogress/get/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )  

  export const delprogress = createAsyncThunk(
    'progress/delete',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.delete(`http://localhost:9000/fitnessprogress/Delete/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )


export const createprogress = createAsyncThunk(
    'progress/create',
    async ({data,token},rejectWithValue) => {

        try{
            
            const response = await axios.post('http://localhost:9000/fitnessprogress/Add',data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )

  export const updateprogress = createAsyncThunk(
    'progress/update',
    async ({id,data,token},rejectWithValue) => {

        try{
            
            const response = await axios.patch(`http://localhost:9000/fitnessprogress/Update/${id}`,data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            return response.data.data

        }catch(error){
            console.log(error)
            return rejectWithValue(error)
        }
    },
  )

const initialState = {

     progress:[],
     loading:true,
     error:false,
     errmsg:null

  }

const progressSlice = createSlice({
  name: 'progresses',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(getallprogress.pending, (state) => {
        state.loading = true
      })
    .addCase(getallprogress.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.progress = action.payload
    })
  
    .addCase(getallprogress.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.errmsg = action.payload
    })

    .addCase(getallprogressadmin.fulfilled, (state, action) => {
      state.loading = false
      state.error = false
      state.progress = action.payload
  })

    .addCase(getprogress.pending, (state) => {
        state.loading = true
        })
    .addCase(getprogress.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.progress = action.payload
    })

    .addCase(getprogress.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.errmsg = action.payload
    })
    .addCase(createprogress.pending, (state) => {
    state.loading = true
    })
    .addCase(createprogress.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.progress.push(action.payload)
      })
    .addCase(createprogress.rejected, (state, action) => {
    state.loading = false
    state.error = true
    state.errmsg = action.payload
    })
    .addCase(updateprogress.fulfilled, (state, action) => {
    state.loading = false
    state.error = false
    state.progress = action.payload
    })

    .addCase(delprogress.fulfilled, (state, action) => {
    state.loading = false
    state.error = false
    let index = state.progress.findIndex(el => el._id === action.payload._id)
    state.progress.splice(index,1)
    })
  },
})

export const { increment} = progressSlice.actions
export const progressdata = state => state.progresses
export default progressSlice.reducer