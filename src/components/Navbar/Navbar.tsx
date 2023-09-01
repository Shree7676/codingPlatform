import { authModalState } from '@/atoms/authModalAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const Navbar = (props: Props) => {
  const setAuthModal = useSetRecoilState(authModalState);
  const handleClick=()=>{
   setAuthModal((prev)=>({...prev,isOpen:true}));
  }
  return (
    <div className='flex  justify-between items-center w-full p-5'>
      <div>
       MC 
      </div>
      <div>
	<button onClick={handleClick} className="bg-blue-500 text-white p-2 pl-4 pr-4 mt-4 text-xl hover:bg-blue-600 w-full rounded-2xl">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
