import { authModalState } from '@/atoms/authModalAtom'
import { type } from 'os'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const Login = (props: Props) => {
  const setAuthModal = useSetRecoilState(authModalState);
  const handleClick = (dataType:'login'|'register'|'forgotPassword')=>{
    setAuthModal((prev)=>({...prev,type:dataType}))
   }; 
  return (
    <>
      <h1 className='text-center text-black text-3xl'>Sign In</h1>
      <div className='mb-5'>
       <label htmlFor="email" className='text-black '>Your Email</label> 
	<div><input type="text" placeholder='abc@gmail.com' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
      </div>

      <div className='mb-5'>
        <label htmlFor="email" className='text-black '>Your Password</label> 
	<div><input type="text" placeholder='*********' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
	<div onClick={()=>handleClick('forgotPassword')} className='flex justify-end mt-2'><a href="#" className='text-blue-400'>Forgot Password?</a></div>
	<button className="bg-blue-500 text-white p-2 mt-4 hover:bg-blue-600 w-full rounded-full">Click Me</button>
      </div>

      <div className='text-gray-500'>Not Registered ? <a onClick={()=>handleClick('register')} href="#" className='text-blue-400'>SignUp</a></div>
    </>
  )
}

export default Login
