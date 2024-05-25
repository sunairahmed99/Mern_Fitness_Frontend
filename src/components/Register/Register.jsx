import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const {register,handleSubmit,watch,reset,formState: { errors }} = useForm()
  let token = localStorage.getItem('token')
  const [setterrors, getterrors] = useState(null)
  let navigate = useNavigate()
  let password = watch('password')

  const onSubmit = (data) => {

    let formData = new FormData()
    formData.append('name',data.name)
    formData.append('phone',data.phone)
    formData.append('email',data.email)
    formData.append('image',data.image[0])
    formData.append('password',data.password)

    registeruser(formData)
  }

  const registeruser =async (formData)=>{

    try{

      let response = await axios.post('http://localhost:9000/user/register',formData)
      localStorage.setItem('token',response.data.token)
      reset()
      navigate('/')
      
    }catch(error){
      let err = error.response.data.error.code
      getterrors(err)
    }
  }


  return (
    <>
    {token && <Navigate to={'/'} replace={true}></Navigate>}
    <div className='h-[145vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Register your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>

          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  {...register("name", { required:'name required'})}
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                Your Phone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  {...register("phone", { required:'phone required',minLength: 11,maxLength: 11})}
                  type="Number"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.phone && <p className='text-red-400'>{errors.phone.message}</p>}
              {errors.phone && errors.phone.type === 'minLength' && <p className='text-red-400'>11 Numbers required</p>}
              {errors.phone && errors.phone.type === 'maxLength' && <p className='text-red-400'>11 Numbers required</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Your Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", { required:'email required', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
              {errors.email && errors.email.type === 'pattern' && <p className='text-red-400'>Invalid email syntax</p>}
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-white">
                Your Image
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  {...register("image")}
                  type="file"
                  autoComplete="image"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
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
              {errors.password && errors.password.type === 'minLength' && <p className='text-red-400'>Minimum 6 digit Code</p>}
              {errors.password && errors.password.type === 'maxLength' && <p className='text-red-400'>Maximum 11 digit code</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="conformpassword" className="block text-sm font-medium leading-6 text-white">
                  Conform Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="conformpassword"
                  {...register("conform_password", { required:'conform password required',validate: (value) =>
                    value === password || 'conform Passwords  not match'})}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.conform_password && <p className='text-red-400'>{errors.conform_password.message}</p>}
            </div>
            {setterrors && setterrors === 11000 && <p className='text-red-600 font-bold text-xl text-center'>Email already registered</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register in
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-white">
            Already a Member?{' '}
            <Link to={"/login/page"} className="font-semibold leading-6 text-black hover:text-indigo-500">
              Login Your Account
            </Link>
            
          </p>
        </div>
      </div>
     
    </div>
    </>
  )
}
