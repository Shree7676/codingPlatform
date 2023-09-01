import React from 'react'

type Props = {}

const ResetPassword= (props: Props) => {
  return (
    <>
      <h1 className='text-center text-black text-3xl'>Reset Password</h1>
      <div className='mb-5'>
       <label htmlFor="email" className='text-black '>Your Email</label> 
	<div><input type="text" placeholder='abc@gmail.com' className='block w-full border border-black p-2 pl-4 rounded-full text-xl mt-2 text-black' /></div>
      </div>
	<button className="bg-blue-500 text-white p-2 mt-4 hover:bg-blue-600 w-full rounded-full">Click Me</button>
    </>
  )
}

export default ResetPassword
