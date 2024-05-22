import {React,Fragment, useEffect} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, userdata } from '../User/userSlice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  let dispatch = useDispatch()
  let {user} = useSelector(userdata)
  let loading
  let token = localStorage.getItem('token')

  let navigation
  let userdatas
  let userNavigation

  if(user && user.role === 'admin' && token){

     navigation = [
      { name: 'Home', href: '/', current: false },
      { name: 'Admin', href: '/admin/check/page', current: false },
      { name: 'Dashboard', href: '#', current: false },
      { name: 'Logout', href: '#', current: false },
    ];

    userdatas = {
      name: user.name,
      email: user.email,
      imageUrl: `http://localhost:9000/${user.image}`,
    };
    userNavigation = [
      { name: 'My Profile', href: '/profile/page' },
      { name: 'Update Password', href: '/password/update/page' },
      { name: 'Sign out', href: '/logout/page' },
    ]
  }
  else if(token && user && user.role !== 'admin'){

    navigation = [
      { name: 'Home', href: '/', current: false },
      { name: 'My Nutrition', href: '/nutrition/page', current: false },
      { name: 'My Fitness', href: '/fitness/progress/page', current: false },
      { name: 'My Support', href: '/support/page', current: false },
      { name: 'Logout', href: '/logout/page', current: false },
    ];

     userdatas = {
      name: user && user.name,
      email: user && user.email,
      imageUrl:`http://localhost:9000/${user && user.image}`,
    };

     userNavigation = [
      { name: 'My Profile', href: '/profile/page' },
      { name: 'Update Password', href: '/password/update/page' },
      { name: 'Sign out', href: '/logout/page' },
    ]

  }
  else{
    navigation = [
      { name: 'Home', href: '/', current: true },
      { name: 'Login', href: '/login/page', current: false },
      { name: 'Register', href: '/register/page', current: false },
    ];

    userdatas = {
      name: 'guest',
      email: 'guest@gmail.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };

    userNavigation = [
      { name: 'Register', href: '/register/page' },
      { name: 'Login', href: '/login/page' },
    ]
  }
  


  useEffect(()=>{
    
    if(token){
      dispatch(fetchUser(token))
    }

  },[dispatch,token])
  return (
    <>
    {loading ? (<h1>Loading..</h1>) : 

<div className="min-h-full mb-[-80px]">
<Disclosure as="nav" className="bg-bgcolor">
  {({ open }) => (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={userdatas.imageUrl} alt="" />
      
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={userdatas.imageUrl} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">{userdatas.name}</div>
              <div className="text-sm font-medium leading-none text-gray-400">{userdatas.email}</div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
</div>
    }
    
    </>
  )
}
