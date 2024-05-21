import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { createNutrition, delNutrition, fetchNutrition, nutritiondata } from './nutritionSlice'
import { Link } from 'react-router-dom'

export default function Nutritions() {
    const {register,handleSubmit,reset,formState: { errors }} = useForm()
    let {nutrition,loading} = useSelector(nutritiondata)
    console.log(nutrition)
    console.log(loading)
    let token = localStorage.getItem('token')
    let dispatch = useDispatch()

    const onSubmit = (data) => {
      console.log(data)

      dispatch(createNutrition({data,token}))
      reset()
      alert('submitten successfully')
      dispatch(fetchNutrition(token))
      }

     
    const delitem = (e,nutr)=>{
      let id = nutr._id

      dispatch(delNutrition({id,token}))
      alert('are you sure to delete this')
      dispatch(fetchNutrition(token))
    }  

      useEffect(()=>{
          dispatch(fetchNutrition(token))
      },[dispatch,token])



  return (
    <>
      <div className='h-[125vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center mt-[-170px] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            My Nutrition
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
                  {...register("foodType", { required:'Food type required'})}
                  autoComplete="country-name"
                  className="w-full  lg:w-[375px] rounded-md border-0 py-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option value={'BreakFast'}>Break Fast</option>
                  <option value={'Lunch'}>Lunch</option>
                  <option value={'Dinner'}>Dinner</option>
                </select>
              </div>
              {errors.foodtype && <p className='text-red-400'>{errors.foodtype.message}</p>}
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.foodItem && <p className='text-red-400'>{errors.foodItem.message}</p>}
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.quantity && <p className='text-red-400'>{errors.quantity.message}</p>}
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.protein && <p className='text-red-400'>{errors.protein.message}</p>}
            </div>

            <div>
              <label htmlFor="protien" className="block text-sm font-medium leading-6 text-white">
                Calories
              </label>
              <div className="mt-2">
                <input
                  id="protien"
                  {...register("calories", { required:'Calories required'})}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.calories && <p className='text-red-400'>{errors.calories.message}</p>}
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

    <div className='text-center bg-bgcolor text-white pb-5 lg:mt-[-100px] font-bold text-xl'>
    <h1>Your Nutition Data</h1>
    </div>
      

    <div className="relative overflow-x-auto mt-[-50px] shadow-md sm:rounded-lg">
     
    {nutrition.length &&
      <table className="w-full mt-[50px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase  bg-bgcolor text-white">
        <tr>
          <th scope="col" className="px-6 py-3">
            S.No
          </th>
          <th scope="col" className="px-6 py-3">
            Food type
          </th>
          <th scope="col" className="px-6 py-3">
            Food Item
          </th>
          <th scope="col" className="px-6 py-3">
            Food Quantity
          </th>
          <th scope="col" className="px-6 py-3">
            Protien
          </th>
          <th scope="col" className="px-6 py-3">
            Calories
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      
      <tbody className="bg-bgcolor">
        {
          nutrition && nutrition.map((nutr,index)=>{
            return(
              <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
          
              <td className="text-white px-6 py-4">{index}</td>
                <td className="text-white px-6 py-4">{nutr.foodType}</td>
                <td className="text-white px-6 py-4">{nutr.foodItem}</td>
                <td className=" text-white px-6 py-4">{nutr.quantity}</td>
                <td className="text-white px-6 py-4">{nutr.protein}</td>
                <td className=" text-white px-6 py-4">{nutr.calories}</td>
                <td className=" text-white px-6 py-4">
                <Link
                  to={`/nutrition/edit/page/${nutr._id}`}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </Link>
                <button
                  onClick={e => delitem(e,nutr)}
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
