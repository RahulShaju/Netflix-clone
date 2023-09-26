import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebaseConfig';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from './LoggedInHeader';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


   
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) { 
        
        const {uid,email,displayName,photoURL} = user
        dispatch(addUser({uid:uid,emailID:email,name:displayName,photoURL:photoURL}))
        // navigate('/browse')
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("header")
        navigate('/browse')
        // ...
      } else {
          console.log("else header")
        //  navigate('/browse')
         
        // User is signed out
        // ...
      }
    });
    return ()=> unsubscribe()
  },[])
  return (
    
      <div>
        <div className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black'>
          <img className='w-44 shadow-lg' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
        </div>
      </div>
   
  );
  
}

export default Header
