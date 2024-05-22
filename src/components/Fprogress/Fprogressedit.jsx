import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getprogress, progressdata, updateprogress } from './fprogressslice'

export default function Fprogressedit() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    let token = localStorage.getItem('token')
    let {id} = useParams()
    let {progress}  = useSelector(progressdata)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    

    const onSubmit = (data) => {
        //  console.log(data)
  
         dispatch(updateprogress({id,data,token}))
          navigate('/fitness/progress/page')

        // reset()
        // alert('submitten successfully')
        // dispatch(fetchNutrition(token))
        }

        useEffect(()=>{
             dispatch(getprogress({id,token}))

        },[dispatch,id,token])



  return (
    <>

    {progress._id  && 
    
    <div className="bg-bgcolor flex min-h-full flex-1 flex-col justify-center mt-[-110px] px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-[69px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Edit My Fitness Progress
      </h2>
    </div>

    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form noValidate className="space-y-6"  method="POST" onSubmit={handleSubmit(onSubmit)}>

<div>
  <label htmlFor="weight" className="block text-sm font-medium leading-6 text-white">
    My Weight In Kgs
  </label>
  <div className="mt-2">
    <input
      id="weight"
      {...register("weight", { required:'Weight required'})}
      type="Number"
      defaultValue={progress.weight}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.weight && <p className='text-red-400'>{errors.weight.message}</p>}
</div>

<div>
  <label htmlFor="waist" className="block text-sm font-medium leading-6 text-white">
    My Waist In Cms
  </label>
  <div className="mt-2">
    <input
      id="waist"
      {...register("waist", { required:'Waist required'})}
      type="Number"
      defaultValue={progress.waist}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.waist && <p className='text-red-400'>{errors.waist.message}</p>}
</div>

<div>
  <label htmlFor="shoulder" className="block text-sm font-medium leading-6 text-white">
    My Shoulder in Cms
  </label>
  <div className="mt-2">
    <input
      id="shoulder"
      {...register("shoulder", { required:'shoulder required'})}
      type="Number"
      defaultValue={progress.shoulder}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.shoulder && <p className='text-red-400'>{errors.shoulder.message}</p>}
</div>

<div>
  <label htmlFor="arms" className="block text-sm font-medium leading-6 text-white">
    My Arms in Cms
  </label>
  <div className="mt-2">
    <input
      id="arms"
      {...register("arms", { required:'Arms required'})}
      type="Number"
      defaultValue={progress.arms}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.arms && <p className='text-red-400'>{errors.arms.message}</p>}
</div>

<div>
  <label htmlFor="legs" className="block text-sm font-medium leading-6 text-white">
    My Legs in Cms
  </label>
  <div className="mt-2">
    <input
      id="legs"
      {...register("legs", { required:'Legs required'})}
      defaultValue={progress.legs}
      type="Number"
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.legs && <p className='text-red-400'>{errors.legs.message}</p>}
</div>

<div>
  <label htmlFor="runTime" className="block text-sm font-medium leading-6 text-white">
    My runTime In Mins
  </label>
  <div className="mt-2">
    <input
      id="runTime"
      {...register("runTime", { required:'runTime required'})}
      type="Number"
      defaultValue={progress.runTime}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.runTime && <p className='text-red-400'>{errors.runTime.message}</p>}
</div>

<div>
  <label htmlFor="liftinWeight" className="block text-sm font-medium leading-6 text-white">
    My LiftinWeight in Kgs
  </label>
  <div className="mt-2">
    <input
      id="liftinWeight"
      {...register("liftinWeight", { required:'liftinWeight required'})}
      type="Number"
      defaultValue={progress.liftingWeight}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
  {errors.liftinWeight && <p className='text-red-400'>{errors.liftinWeight.message}</p>}
</div>

<div>
  <button
    type="submit"
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Update
  </button>
</div>
</form>
    </div>
  </div>
   }
  </>
  )
}

