import { authModalState } from '@/atoms/authModalAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const SignUp = (props: Props) => {
  const setAuthModal = useSetRecoilState(authModalState);
  const handleClick = ()=>{
    setAuthModal((prev)=>({...prev,type:'login'}))
   }; 
  return (
    <>
      <h1 className='text-center text-black text-3xl'>Sign Up</h1>
      <div className='mb-5'>
       <label htmlFor="email" className='text-black '>Your Email</label> 
	<div><input type="text" placeholder='abc@gmail.com' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
      </div>

      <div className='mb-5'>
        <label htmlFor="email" className='text-black '>Create Password</label> 
	<div><input type="text" placeholder='*********' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
        <label htmlFor="email" className='text-black '>Confirm Password</label> 
	<div><input type="text" placeholder='*********' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
	<button className="bg-blue-500 text-white p-2 mt-4 hover:bg-blue-600 w-full rounded-full">Click Me</button>
      </div>

      <div className='text-gray-500'>Already Registered ? <a onClick={handleClick} href="#" className='text-blue-400'>SignIn</a></div>
    </>
  )
}

export default SignUp
