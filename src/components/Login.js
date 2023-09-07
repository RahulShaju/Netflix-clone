import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkFormValidation } from '../utils/validate'

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const toggleForm = (e) =>{
    e.preventDefault()
     setIsSigninForm(!isSigninForm)
  }
  const handleButtonSubmit = () =>{
  console.log("email",email.current.value)
  console.log("password",password.current.value)
  const errorMessage = checkFormValidation(email.current.value,password.current.value)
   setErrorMessage(errorMessage)
  }
  return (
    <div className='relative h-screen'>
       
        <Header/>
     
      <div className='absolute'>
        <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
      </div>
      <div  className='absolute rounded-lg  bg-black w-[450px] p-2 my-44 mx-auto top-0 right-0 left-0 text-white bg-opacity-80'>
     <form onSubmit={(e)=>{
         e.preventDefault()
     }} className='px-6' action="">
        <h1 className='mt-[60px] px-6 font-semibold text-3xl'>{ isSigninForm ? 'Sign in': 'Sign up'}</h1>
       {!isSigninForm &&  <div className='mt-[28px] px-6 bg-opacity-30'>
        <input className='w-full h-[50px] bg-[#333333] px-5 py-4 rounded-lg'  type="text" placeholder='enter your full name' />
        </div>}
        <div className={`${isSigninForm ? 'mt-[28px]' : 'mt-[16px]'} px-6 bg-opacity-30`}>
        <input ref={email} className='w-full h-[50px] bg-[#333333] px-5 py-4 rounded-lg'  type="text" placeholder='enter your email address' />
        </div>

        
        <div className='mt-[16px] px-6'>
        <input ref={password} className='w-full h-[50px] bg-[#333333] px-5 py-4 rounded-lg' type="password" placeholder='enter your passwprd' />
        </div>
        {errorMessage && <p className='px-6 text-yellow-500 font-semibold text-md'>{errorMessage}</p> }

        <div className='mt-[40px] px-6 mb-14 h-[50px] '>
        <button onClick={handleButtonSubmit} className='w-full h-full bg-[#e50914] rounded-lg '> {isSigninForm ?
             "Sign in" :"Sign up"}</button>
        </div>
        <div className='mt-[40px] px-6 mb-14 h-[50px]'> 
        <h1>
         {
           isSigninForm ?
           <div> <span className='text-gray-600 font-semibold'>New to Netflix?</span> <span onClick={toggleForm} className='font-semibold hover:underline cursor-pointer '>Sign up now.</span></div>
           :<div> <span className='text-gray-600 font-semibold'>Already a user?</span> <span onClick={toggleForm} className='font-semibold hover:underline cursor-pointer'>Sign In now.</span></div>
          }
           </h1>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Login
