import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebaseConfig'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  const user = useSelector(store=>store.user)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email} = user
        dispatch(addUser({uid:uid,emailID:email}))
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
    
        // ...
      } else {
          dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  },[onAuthStateChanged])
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
