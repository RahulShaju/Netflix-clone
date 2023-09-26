import React, { useEffect } from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  // const user = useSelector(store=>store.user)

 
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/browse',
            element: <Browse/>

        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
