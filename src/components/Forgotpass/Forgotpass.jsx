import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'


export default function Forgotpass() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    const [seterrors, geterrors] = useState(null)
    const [loading, setloading] = useState(false)
    

    const onSubmit = (data) => {
    
        forgotpass(data)
    }

    const forgotpass =async (data)=>{

        try{
    
          let response = await axios.post('http://localhost:9000/user/forgotpass',data)
          setloading(true)
          console.log(response)
          
        }catch(error){
            if(error){
                let err = error.response.data.status
                geterrors(err)

            }
        }
      }

  return (
    <>
    
    <div className='h-[126vh] bg-bgcolor'>

      <div className="flex min-h-full mt-[-250px] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Forgot Your Password
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Forgot Password
              </button>
            </div>
            {seterrors && seterrors === 'fail' && <p className='text-red-600 font-bold text-xl text-center'>Email Not Found</p>}
            {loading && (<p className='text-red-600 font-bold text-xl text-center'>Reset passowrd link sent to your email </p>)}
          </form>
        </div>
      </div>
     
    </div>
    </>
  )
}
