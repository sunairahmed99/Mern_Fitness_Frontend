import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallprogress,delprogress,progressdata } from '../Fprogress/fprogressslice'


export default function Allfitness() {
    let token = localStorage.getItem('token')
    let {progress} = useSelector(progressdata)
    let dispatch = useDispatch()
  

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
    <>
     <div className='h-[110vh] bg-bgcolor'>
    <div className=' mt-[70px] text-center bg-bgcolor text-white pb-5 lg:mt-[50px] font-bold text-xl'>
    <h1 className='pt-[80px]'>All Users Progress Data</h1>
    </div>
    <div className="relative overflow-x-auto mt-[-30px] pt-[30px] shadow-md sm:rounded-lg">
     
    {progress.length &&
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
            Waist
          </th>
          <th scope="col" className="px-6 py-3">
            Shoulder
          </th>
          <th scope="col" className="px-6 py-3">
            arms
          </th>
          <th scope="col" className="px-6 py-3">
            legs
          </th>
          <th scope="col" className="px-6 py-3">
            runTime
          </th>
          <th scope="col" className="px-6 py-3">
            liftinWeight
          </th>
        </tr>
      </thead>
      
       <tbody className="bg-bgcolor">
        {
          progress && progress.map((prog,index)=>{
            return(
              <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
          
              <td className="text-white px-6 py-4">{index}</td>
                <td className="text-white px-6 py-4">{prog.userId.name}</td>
                <td className="text-white px-6 py-4">{prog.userId.email}</td>
                <td className=" text-white px-6 py-4">{prog.waist}</td>
                <td className="text-white px-6 py-4">{prog.shoulder}</td>
                <td className="text-white px-6 py-4">{prog.arms}</td>
                <td className=" text-white px-6 py-4">{prog.runTime}</td>
                <td className=" text-white px-6 py-4">{prog.liftingWeight}</td>                
                <td className=" text-white px-6 py-4">
                
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
    </>
  )
}

