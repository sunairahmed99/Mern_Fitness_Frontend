import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux'
import { userdata } from './userSlice'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserProfileEdit() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    let token = localStorage.getItem('token')
    let {id} = useParams()
    const [selectimage,setselectimage] = useState(null)
    let {user} = useSelector(userdata)
    let navigate = useNavigate()

    const onSubmit = (data) => {
        
        let image = selectimage ? selectimage : user.image

        let formData = new FormData()
        formData.append('name',data.name)
        formData.append('phone',data.phone)
        formData.append('image',image)
        formData.append('oldimage',user.image)

        if(token){

             updateuser(formData)
        }
      }

      const updateuser =async (formData)=>{

        try{
    
          let response = await axios.patch(`http://localhost:9000/user/update/${id}`,formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }
          })

          navigate('/profile/page')
          return response
          
        }catch(error){
          
            return error
        }
      }


  return (
    <>
    {
        user &&
        <div className='h-[115vh] bg-bgcolor'>

     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Update Your Profile
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
                  defaultValue={user.name}
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
                  defaultValue={user.phone}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.phone && <p className='text-red-400'>{errors.phone.message}</p>}
              {errors.phone && errors.phone.type === 'minLength' && <p className='text-red-400'>11 Numbers required</p>}
              {errors.phone && errors.phone.type === 'maxLength' && <p className='text-red-400'>11 Numbers required</p>}
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
                  onChange={e => setselectimage(e.target.files[0])}
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-white">
                Existing Image
              </label>
              <div className="mt-2">
               <img className='h-[100px] w-[100px]' src={`http://localhost:9000/${user.image}`} alt="" />
              </div>
            </div>

           

            
            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
    }
    
    </>
  )
}
