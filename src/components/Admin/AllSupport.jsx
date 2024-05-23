import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delsupport, fetchsupport, supportdata } from '../Support/supportSlice'


export default function AllSupport() {
    let token = localStorage.getItem('token')
    let {support} = useSelector(supportdata)
    console.log(support)
    let dispatch = useDispatch()
  

    const delitem = (e,sport)=>{
        let id = sport._id

        dispatch(delsupport({id,token}))
        alert('are you sure to delete this')
        dispatch(fetchsupport(token))

    }



    useEffect(()=>{

            dispatch(fetchsupport(token))

    },[dispatch,token])

    
  return (
    <>
     <div className='h-[110vh] bg-bgcolor'>
    <div className=' mt-[70px] text-center bg-bgcolor text-white pb-5 lg:mt-[50px] font-bold text-xl'>
    <h1 className='pt-[80px]'>All Users Support Data</h1>
    </div>
    <div className="relative overflow-x-auto mt-[-30px] pt-[30px] shadow-md sm:rounded-lg">
     
    {support.length &&
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
            type
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
          
        </tr>
      </thead>
      
       <tbody className="bg-bgcolor">
        {
          support && support.map((sport,index)=>{
            return(
              <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
          
              <td className="text-white px-6 py-4">{index}</td>
                <td className="text-white px-6 py-4">{sport.userId.name}</td>
                <td className="text-white px-6 py-4">{sport.userId.email}</td>
                <td className=" text-white px-6 py-4">{sport.type}</td>
                <td className="text-white px-6 py-4">{sport.description}</td>               
                <td className=" text-white px-6 py-4">
                
                <button
                  onClick={e => delitem(e,sport)}
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
