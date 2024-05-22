import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, userdata } from './User/userSlice'
import { Navigate} from 'react-router-dom'

export default function AdminProtect({children}) {
    let token = localStorage.getItem('token')
    let dispatch = useDispatch()
    let {user} = useSelector(userdata)

    useEffect(()=>{
        if(token){
            dispatch(fetchUser(token))
        }
    },[dispatch,token])

  if(user && user.role === 'admin'){
    return user && user.role === 'admin' ? children : <Navigate to={'/'} replace={true}></Navigate>;
  }    
};

    

