import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delNutrition, fetchNutrition, nutritiondata } from '../Nutritions/nutritionSlice'


export default function AllNutrition() {
    let token = localStorage.getItem('token')
    let {nutrition} = useSelector(nutritiondata)
    console.log(nutrition)
    let dispatch = useDispatch()

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
    <div className=' mt-[130px] text-center bg-bgcolor text-white pb-5 lg:mt-[-100px] font-bold text-xl'>
    <h1>All Users Nutritions Data</h1>
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
            User Name
          </th>
          <th scope="col" className="px-6 py-3">
            User Email
          </th>
          <th scope="col" className="px-6 py-3">
            Food Type
          </th>
          <th scope="col" className="px-6 py-3">
            Food Item
          </th>
          <th scope="col" className="px-6 py-3">
            Food Quantity
          </th>
          <th scope="col" className="px-6 py-3">
            Protein
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
                <td className="text-white px-6 py-4">{nutr.userId.name}</td>
                <td className="text-white px-6 py-4">{nutr.userId.email}</td>
                <td className=" text-white px-6 py-4">{nutr.foodType}</td>
                <td className="text-white px-6 py-4">{nutr.foodItem}</td>
                <td className="text-white px-6 py-4">{nutr.quantity}</td>
                <td className=" text-white px-6 py-4">{nutr.protein}</td>
                <td className=" text-white px-6 py-4">{nutr.calories}</td>                
                <td className=" text-white px-6 py-4">
                
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
    </>
  )
}
