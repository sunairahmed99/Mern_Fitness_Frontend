import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { fetchgetNutrition, nutritiondata, updateNutrition } from './nutritionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function NutritionEdit() {
    const {register,handleSubmit} = useForm()
    let token = localStorage.getItem('token')
    
    let {id} = useParams()
    let {nutrition} = useSelector(nutritiondata)
    
    let navigate = useNavigate()
    let dispatch = useDispatch()
    

    const onSubmit = (data) => {
         
  
         dispatch(updateNutrition({id,data,token}))
         navigate('/nutrition/page')

        // reset()
        // alert('submitten successfully')
        // dispatch(fetchNutrition(token))
        }

        useEffect(()=>{
            dispatch(fetchgetNutrition({id,token}))

        },[dispatch,id,token])



  return (
    <>

    {nutrition._id  && 
    
    <div className="bg-bgcolor h-[100vh] lg:h-[115vh] flex min-h-full flex-1 flex-col justify-center mt-[-110px] px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Edit My Nutrition
      </h2>
    </div>

    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>

      <div>
          <label htmlFor="foodtype" className="block text-sm font-medium leading-6 text-white">
            Food Type
          </label>
          <div className="mt-2">
          <select
              id="foodtype"
              defaultValue={nutrition.foodType}
              {...register("foodType", { required:'Food type required'})}
              autoComplete="country-name"
              className="w-full  lg:w-[375px] rounded-md border-0 py-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
            >
              <option value={'BreakFast'}>Break Fast</option>
              <option value={'Lunch'}>Lunch</option>
              <option value={'Dinner'}>Dinner</option>
            </select>
          </div>
          
        </div>

        <div>
          <label htmlFor="foodItem" className="block text-sm font-medium leading-6 text-white">
            Food Item
          </label>
          <div className="mt-2">
            <input
              id="foodItem"
              {...register("foodItem", { required:'Food Item required'})}
              type="text"
              defaultValue={nutrition.foodItem}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
         
        </div>

        <div>
          <label htmlFor="foodqty" className="block text-sm font-medium leading-6 text-white">
            Food Quantity in kg
          </label>
          <div className="mt-2">
            <input
              id="foodqty"
              {...register("quantity", { required:'Food Quantity Item required'})}
              type="text"
              defaultValue={nutrition.quantity}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
         
        </div>

        <div>
          <label htmlFor="protein" className="block text-sm font-medium leading-6 text-white">
            Protein
          </label>
          <div className="mt-2">
            <input
              id="protein"
              {...register("protein", { required:'protein required'})}
              type="text"
              defaultValue={nutrition.protein}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          
        </div>

        <div>
          <label htmlFor="calories" className="block text-sm font-medium leading-6 text-white">
            Calories
          </label>
          <div className="mt-2">
            <input
              id="calories"
              {...register("calories", { required:'Calories required'})}
              type="text"
              defaultValue={nutrition.calories}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
         
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Nutrition
          </button>
        </div>
      </form>
    </div>
  </div>
   }
  </>
  )
}

