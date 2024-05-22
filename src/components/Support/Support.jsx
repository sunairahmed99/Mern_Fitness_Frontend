import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { createsupport, delsupport, fetchsupport, supportdata } from './supportSlice'

export default function Support() {
    const {register,handleSubmit,reset,formState: { errors }} = useForm()
    let {support,loading} = useSelector(supportdata)
    console.log(loading)
    let token = localStorage.getItem('token')
    let dispatch = useDispatch()

    const onSubmit = (data) => {
      console.log(data)

      dispatch(createsupport({data,token}))
      reset()
      alert('submitten successfully')
      dispatch(fetchsupport(token))
      }

     
    const delitem = (e,sup)=>{
      let id = sup._id

      dispatch(delsupport({id,token}))
      alert('are you sure to delete this')
      dispatch(fetchsupport(token))
    }  

      useEffect(()=>{
          dispatch(fetchsupport(token))
      },[dispatch,token])



  return (
    <>
      <div className='h-[125vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center mt-[-170px] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[-57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            My Support System
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="stype" className="block text-sm font-medium leading-6 text-white">
                Support Type
              </label>
              <div className="mt-2">
              <select
                  id="stype"
                  {...register("stype", { required:'Support type required'})}
                  autoComplete="country-name"
                  className="w-full  lg:w-[379px] rounded-md border-0 py-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value={'assistance'}>assistance</option>
                  <option value={'issue'}>issue</option>
                  <option value={'feedback'}>feedback</option>
                </select>
              </div>
              {errors.stype && <p className='text-red-400'>{errors.stype.message}</p>}
            </div>

            <div>
              <label htmlFor="sdescription" className="block text-sm font-medium leading-6 text-white">
                Support Description
              </label>
              <div className="mt-2">
                <input
                  id="sdescription"
                  {...register("sdescription", { required:'Food Item required'})}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.sdescription && <p className='text-red-400'>{errors.sdescription.message}</p>}
            </div>

            <div>
              <label htmlFor="spriority" className="block text-sm font-medium leading-6 text-white">
                Support priority
              </label>
              <div className="mt-2">
              <select
                  id="spriority"
                  {...register("spriority", { required:'Support type required'})}
                  autoComplete="country-name"
                  className="w-full  lg:w-[379px] rounded-md border-0 py-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value={'low'}>low</option>
                  <option value={'medium'}>medium</option>
                  <option value={'high'}>high</option>
                </select>
              </div>
              {errors.spriority && <p className='text-red-400'>{errors.spriority.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    <div className='text-center bg-bgcolor text-white pb-5 lg:mt-[-200px] font-bold text-xl'>
    <h1>Your Support Data</h1>
    </div>
      

    <div className="relative overflow-x-auto mt-[-50px] shadow-md sm:rounded-lg">
     
    {support && support.length &&
      <table className="w-full mt-[50px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase  bg-bgcolor text-white">
        <tr>
          <th scope="col" className="px-6 py-3">
            S.No
          </th>
          <th scope="col" className="px-6 py-3">
            Support type
          </th>
          <th scope="col" className="px-6 py-3">
            Support Description
          </th>
          <th scope="col" className="px-6 py-3">
            Support Priority
          </th>
         
        </tr>
      </thead>
      
      <tbody className="bg-bgcolor">
        {
          support && support.map((sup,index)=>{
            return(
              <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
          
              <td className="text-white px-6 py-4">{index}</td>
                <td className="text-white px-6 py-4">{sup.type}</td>
                <td className="text-white px-6 py-4">{sup.description}</td>
                <td className=" text-white px-6 py-4">{sup.priority}</td>
                <td className=" text-white px-6 py-4">
                <button
                  onClick={e => delitem(e,sup)}
                  className="flex w-full mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Delete
                </button>
                </td>
              </tr>  

            )
          })
        }
      </tbody>
      
    </table>
    }

    </div>
    </div>
  
    </>
  )
}
