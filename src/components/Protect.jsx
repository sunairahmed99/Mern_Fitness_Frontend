import React from 'react'
import { Navigate} from 'react-router-dom'

export default function Protect({children}) {
    let token = localStorage.getItem('token')

    if(token){
        return children
    }
    else{
        return <Navigate to={'/'} replace={true}></Navigate>
    }
}
