import React from 'react'
import { useSelector } from 'react-redux'
import { userdata } from './userSlice'
import { Link } from 'react-router-dom'


export default function UserProfile() {
    let {user} = useSelector(userdata)
   
  return (
  <>
  {user &&
 <div className="h-screen bg-bgcolor  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
    <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden">
        <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
      </div>
      <div className="flex justify-center px-5  -mt-12">
        <img className="h-32 w-32 bg-white p-2 rounded-full" src={`http://localhost:9000/${user.image}`} alt="" />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">{user.name}</h2>
          <p className="text-gray-400 mt-2 hover:text-blue-500"  target="BLANK()">{user.email}</p>
          <p className="mt-2 text-gray-500 text-sm">{user.phone}</p>
        </div>
        <hr className="mt-6" />
        <div className="flex  bg-gray-50 ">
          <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
            <p><span className="font-semibold">Role</span></p>
          </div>
          <div className="border" />
          <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
            <p> <span className="font-semibold">{user.role}</span></p>
          </div>
        </div>
      </div>
      <Link to={`/edit/profile/page/${user._id}`}>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        Edit Profile
        </button>
      </Link>
    </div>
  </div>
  }
  </>  
  )
}
