import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, userdata } from './User/userSlice'
import { Navigate, useNavigate } from 'react-router-dom';


export default function AdminProtect({children}) {
    let token = localStorage.getItem('token')
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let {user} = useSelector(userdata)

    useEffect(()=>{
        if(token){
            dispatch(fetchUser(token))
        }
        else{
          navigate('/')
        }
    },[dispatch,token,navigate])


  if(token && user && user.role === 'admin'){
    return  children 
  }
  else if(user && user.role !=='admin'){
    return <Navigate to={'/'} replace={true}></Navigate>

  }    
};

    

