import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const LoggedInHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showDropdown,setShowDropdwon] = useState(false)
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          console.log(user)
  
          if (user) {
           
        console.log("logged in header")
            // ...
          } else {
            console.log("else of loged in header")
              dispatch(removeUser())
              navigate('/')
            // User is signed out
            // ...
          }
        });
        return ()=> unsubscribe()
      },[])
    const handleClick = ()=> {
       setShowDropdwon(!showDropdown)
    }
    const handleSignout = () =>{
        signOut(auth).then(() => { 
          }).catch((error) => { 
            navigate('/error')
            // An error happened.
          });
    }
  return (
    <div className=' '>
      <div className='z-20  px-8  py-2 bg-gradient-to-b from-black w-screen flex justify-between'>
        <img className='w-32 shadow-lg' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
        <div className='mr-24 mt-2'>
        <img onClick={handleClick} className='h-10 w-10 rounded-lg' src="https://occ-0-4822-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="usericon" />
      </div>
     {showDropdown&& <span className='w-44 top-0 right-0 mr-28  bg-black bg-opacity-50 h-auto absolute mt-16 '>
        <ul className='p-2'>
            <li><button onClick={handleSignout} className='p-2  rounded-lg'>Sign out</button></li>
        </ul>
     </span> }
     
      </div>
      
      

  
    </div>
  )
}

export default LoggedInHeader
