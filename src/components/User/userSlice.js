import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUser = createAsyncThunk(
    'users/fetch',
    async (token,rejectWithValue) => {

        try{
            
            const response = await axios.get('http://localhost:9000/user/getuser',{
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

     user: null,
     loading:true

  }

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
  },
})

export const { increment} = userSlice.actions
export const userdata = state => state.users
export default userSlice.reducer