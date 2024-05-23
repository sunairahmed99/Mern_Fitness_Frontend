import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alluserdata, deluser, fetchalluser } from './allUserSlice'


export default function AllUsers() {
    let token = localStorage.getItem('token')
    let {alluser} = useSelector(alluserdata)
    console.log(alluser)
    let dispatch = useDispatch()

    const delitem = (e,user)=>{
        let id = user._id

        dispatch(deluser({id,token}))
        alert('are you sure to delete this')
        dispatch(fetchalluser(token))

    }



    useEffect(()=>{

            dispatch(fetchalluser(token))

    },[dispatch,token])

    
  return (
    <>
    <div className=' mt-[130px] text-center bg-bgcolor text-white pb-5 lg:mt-[-100px] font-bold text-xl'>
    <h1>All Users Data</h1>
    </div>
    <div className="relative overflow-x-auto mt-[-50px] shadow-md sm:rounded-lg">
     
    {alluser.length &&
      <table className="w-full mt-[50px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase  bg-bgcolor text-white">
        <tr>
          <th scope="col" className="px-6 py-3">
            S.No
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Image
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      
      <tbody className="bg-bgcolor">
        {
          alluser && alluser.map((user,index)=>{
            return(
              <tr key={index} className=" bg-bgcolor border-b dark:bg-red-600 dark:border-gray-700">
          
              <td className="text-white px-6 py-4">{index}</td>
                <td className="text-white px-6 py-4">{user.name}</td>
                <td className="text-white px-6 py-4">{user.email}</td>
                <td className=" text-white px-6 py-4">{user.phone}</td>
                <td className="text-white px-6 py-4"><img src={`http://localhost:9000/${user.image}`} alt="" /></td>
                
                <td className=" text-white px-6 py-4">
                
                <button
                  onClick={e => delitem(e,user)}
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
