import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

export default function PasswordUpdate() {
    const {register,handleSubmit,watch,reset,formState: { errors }} = useForm()
    let token = localStorage.getItem('token')
    let navigate = useNavigate()
    const [setterrors, getterrors] = useState(null)
    let password = watch('password')
    

    const onSubmit = (data) => {
        console.log(data)

        
         userpasswordupdate(data)
      }

      const userpasswordupdate =async (data)=>{

        try{
    
            const response = await axios.patch('http://localhost:9000/user/updatepassword',data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            })
          localStorage.removeItem('token')
           reset()
           navigate('/')
           return response
          
        }catch(error){
            console.log(error.response.data.status)
          let err = error.response.data.status
          getterrors(err)
        }
      }



  return (
    <div className='h-[115vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[-70px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Update Your Password
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>
   
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="oldpassword" className="block text-sm font-medium leading-6 text-white">
                  Old Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="oldpassword"
                  {...register("oldpassword", { required:'Old password required',minLength:6,maxLength:15})}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.oldpassword && <p className='text-red-400'>{errors.oldpassword.message}</p>}
              {errors.oldpassword && errors.oldpassword.type === 'minLength' && <p className='text-red-400'>Minimum 6 digit Code</p>}
              {errors.oldpassword && errors.oldpassword.type === 'maxLength' && <p className='text-red-400'>Maximum 11 digit code</p>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  New Password
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
            <div>
            {setterrors && setterrors === 'fail' && <p className='text-red-600 font-bold text-xl text-center'>Old Password Not Correct</p>}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Your Password
              </button>
            </div>
          </form>
        </div>
        
      </div>
     
    </div>
  )
}
