import  { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

export default function Logout() {
    let token = localStorage.getItem('token')
    let navigate = useNavigate()

    useEffect(()=>{
        if(token){
            localStorage.removeItem('token')
            navigate('/')
        }
        else{
            navigate('/')
        }
    },[token,navigate])
}
