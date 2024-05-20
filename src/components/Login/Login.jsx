import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const {register,handleSubmit,reset,formState: { errors }} = useForm()
    const [seterrors, geterrors] = useState(null)
    let navigate = useNavigate()

    const onSubmit = (data) => {
    
        loginuser(data)
    }

      const loginuser =async (data)=>{

        try{
    
          let response = await axios.post('http://localhost:9000/user/login',data)
          localStorage.setItem('token',response.data.token)
          reset()
          navigate('/')
          
        }catch(error){
          let err = error.response.data.status
           geterrors(err)
        }
      }



  return (
    <div className='h-[126vh] bg-bgcolor'>

      <div className="flex min-h-full mt-[-250px] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Login your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Your Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", { required:'email required'})}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
            </div>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <Link to={'/forgot/page'} className="font-semibold text-white hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", { required:'password required',minLength:6,maxLength:15})}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            {seterrors && seterrors === 'fail' && <p className='text-red-600 font-bold text-xl text-center'>Invalid Credentials</p>}
          </form>

          <p className="mt-3 text-center text-sm text-white">
            Not a Member?{' '}
            <Link to={"/register/page"} className="font-semibold leading-6 text-black hover:text-indigo-500">
               Register Your Account
            </Link>
            
          </p>
        </div>
      </div>
     
    </div>
  )
}
