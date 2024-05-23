import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



  export const fetchalluser = createAsyncThunk(
    'users/fetchall',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/user/getall',{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data.data)
            return response.data.data

        }catch(error){
           
            return rejectWithValue(error)
        }
    },
  )

  export const deluser = createAsyncThunk(
    'users/del',
    async ({id,token},rejectWithValue) => {

        try{
            
            const response = await axios.delete(`http://localhost:9000/user/del/${id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
            console.log(response.data.data)
            return response.data.data

        }catch(error){
           
            return rejectWithValue(error)
        }
    },
  )

  

const initialState = {

     alluser: [],
     loading:true,
     error:false,
     errmsg:null

  }

const alluserSlice = createSlice({
  name: 'allusers',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
  extraReducers: (builder) => {
    
    builder

    .addCase(fetchalluser.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        state.alluser = action.payload
      }) 
    .addCase(fetchalluser.rejected, (state, action) => {
      state.loading = false
      state.error = true
      state.errmsg = action.payload
    }) 
    .addCase(deluser.fulfilled, (state, action) => {
        state.loading = false
        state.error = false
        let index = state.alluser.findIndex(el => el._id === action.payload._id)
        state.alluser.splice(index,1)
      })
  },
})

export const { increment} = alluserSlice.actions
export const alluserdata = state => state.allusers
export default alluserSlice.reducer