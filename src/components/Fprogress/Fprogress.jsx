import React from 'react'
import { useForm } from "react-hook-form"

export default function Fprogress() {
    const {register,handleSubmit,formState: { errors }} = useForm()

    const onSubmit = (data) => {

        // let formData = new FormData()
        // formData.append('name',data.name)
        // formData.append('phone',data.phone)
        // formData.append('email',data.email)
        // formData.append('image',data.image[0])
        // formData.append('password',data.password)
    
        // registeruser(formData)
      }
  return (
    
    <div className='h-[125vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center mt-[-170px] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[57px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            My Fitness Progress
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
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="w-[375px] rounded-md border-0 py-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option>Break Fast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </select>
              </div>
              {errors.foodtype && <p className='text-red-400'>{errors.foodtype.message}</p>}
            </div>

            <div>
              <label htmlFor="fooditem" className="block text-sm font-medium leading-6 text-white">
                Food Item
              </label>
              <div className="mt-2">
                <input
                  id="fooditem"
                  {...register("fooditem", { required:'Food Item required'})}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.fooditem && <p className='text-red-400'>{errors.fooditem.message}</p>}
            </div>

            <div>
              <label htmlFor="foodqty" className="block text-sm font-medium leading-6 text-white">
                Food Quantity
              </label>
              <div className="mt-2">
                <input
                  id="foodqty"
                  {...register("foodqty", { required:'Food Quantity Item required'})}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.foodqty && <p className='text-red-400'>{errors.foodqty.message}</p>}
            </div>

            <div>
              <label htmlFor="protien" className="block text-sm font-medium leading-6 text-white">
                Protien
              </label>
              <div className="mt-2">
                <input
                  id="protien"
                  {...register("protien", { required:'protien required'})}
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.protien && <p className='text-red-400'>{errors.protien.message}</p>}
            </div>

            <div>
              <label htmlFor="protien" className="block text-sm font-medium leading-6 text-white">
                Calories
              </label>
              <div className="mt-2">
                <input
                  id="protien"
                  {...register("calories", { required:'protien required'})}
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

    <div className='text-center text-white mt-[-100px] font-bold text-xl'>
    <h1>Your Fitness Progress Data</h1>
    </div>
      

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
          Food Quantity
        </th>
      </tr>
    </thead>
    <tbody className="bg-bgcolor">
      <tr className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
        
      <td className="text-white px-6 py-4">Silver</td>
        <td className="text-white px-6 py-4">Silver</td>
        <td className="text-white px-6 py-4">Laptop</td>
        <td className=" text-white px-6 py-4">$2999</td>
        <td className="text-white px-6 py-4">Silver</td>
        <td className="text-white px-6 py-4">Laptop</td>
        <td className=" text-white px-6 py-4">$2999</td>
      </tr>

      
     
      
    </tbody>
  </table>

      
     
    </div>
  )
}
