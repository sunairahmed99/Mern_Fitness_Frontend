import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { createprogress, delprogress, getallprogress, progressdata } from './fprogressslice'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf';
import 'jspdf-autotable';



export default function Fprogress() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    let token = localStorage.getItem('token')
    let {progress} = useSelector(progressdata)
    let dispatch = useDispatch()

    const generatePDF = () => {
      const doc = new jsPDF();

      const columns = [
        { header: 'User ID', dataKey: 'userId._id' },
        { header: 'Name', dataKey: 'userId.name' },
        { header: 'Phone', dataKey: 'userId.phone' },
        { header: 'Email', dataKey: 'userId.email' },
        { header: 'Weight', dataKey: 'weight' },
        { header: 'Waist', dataKey: 'waist' },
        { header: 'Shoulder', dataKey: 'shoulder' },
        { header: 'Arms', dataKey: 'arms' },
        { header: 'Legs', dataKey: 'legs' },
        { header: 'Run Time', dataKey: 'runTime' },
        { header: 'Lifting Weight', dataKey: 'liftingWeight' },
        { header: 'Create Date', dataKey: 'createdate' },
      ];

      const rows = progress.map(item => ({
        'userId._id': item.userId._id,
        'userId.name': item.userId.name,
        'userId.phone': item.userId.phone,
        'userId.email': item.userId.email,
        'weight': item.weight,
        'waist': item.waist,
        'shoulder': item.shoulder,
        'arms': item.arms,
        'legs': item.legs,
        'runTime': item.runTime,
        'liftingWeight': item.liftingWeight,
        'createdate': new Date(item.createdate).toLocaleString(), // Formatting date
      }));

      doc.text('My Fitness Progress Data', 14, 20);

      doc.autoTable({
        startY: 30,
        head: [columns.map(col => col.header)],
        body: rows.map(row => columns.map(col => row[col.dataKey])),
      });

      doc.save('user-metrics-data.pdf');
    }

    const onSubmit = (data) => {
      console.log(data)
      console.log(data.weight)

      dispatch(createprogress({data,token}))
      }

    const delitem = (e,prog)=>{
      
      let id = prog._id


      dispatch(delprogress({id,token}))
      alert('are you sure to delete this')
      dispatch(getallprogress(token))

    }  

      useEffect(()=>{

        dispatch(getallprogress(token))

      },[dispatch,token])



  return (
    
    <div className='h-[165vh] bg-bgcolor'>

      <div className="flex min-h-full flex-1 flex-col justify-center mt-[-70px] px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-[-187px] lg:mt-[-100px] text-center text-2xl font-bold leading-9 tracking-tight text-white">
            My Fitness Progress
          </h2>
        </div>

        <div className="mt-[-80px] lg:mt-[-40px] sm:mx-auto sm:w-full sm:max-w-sm">
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    <div className='text-center bg-bgcolor text-white mb-[10px]  mt-[-20px] lg:mt-[-150px] font-bold text-xl'>
    <h1>Your Fitness Progress Data</h1>
    </div>

     <div className="relative overflow-x-auto mt-[-14px] shadow-md sm:rounded-lg">     
     {
      progress  && progress.length &&
      <table className="w-full mt-[5px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase  bg-bgcolor text-white">
      <tr>
        <th scope="col" className="px-6 py-3">
          S.No
        </th>
        <th scope="col" className="px-6 py-3">
          My Weight In Kgs
        </th>
        <th scope="col" className="px-6 py-3">
          My Waist In Cms
        </th>
        <th scope="col" className="px-6 py-3">
          My Shoulder In Cms
        </th>
        <th scope="col" className="px-6 py-3">
          My Arms In Cms
        </th>
        <th scope="col" className="px-6 py-3">
          My Legs In Cms
        </th>
        <th scope="col" className="px-6 py-3">
          My runTime in Mins
        </th>
        <th scope="col" className="px-6 py-3">
          My Liftin Weight In Kgs
        </th>
        <th scope="col" className="px-6 py-3">
         Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-bgcolor">
      {
        progress && progress.map((prog,index)=>{
          return(

            <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
        
            <td className="text-white px-6 py-4">{index}</td>
              <td className="text-white px-6 py-4">{prog.weight}</td>
              <td className="text-white px-6 py-4">{prog.waist}</td>
              <td className=" text-white px-6 py-4">{prog.shoulder}</td>
              <td className="text-white px-6 py-4">{prog.arms}</td>
              <td className="text-white px-6 py-4">{prog.legs}</td>
              <td className=" text-white px-6 py-4">{prog.runTime}</td>
              <td className=" text-white px-6 py-4">{prog.liftingWeight}</td>
              <td className=" text-white px-6 py-4">
                
              <Link
                  to={`/fitness/progress/edit/page/${prog._id}`}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </Link>
                <button
                  onClick={generatePDF}
                  className="flex w-full mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Generate PDF
                </button>
                <button
                  onClick={e => delitem(e,prog)}
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
  )
}
