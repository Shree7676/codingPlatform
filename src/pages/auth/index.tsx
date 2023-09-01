import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import AuthModal from '@/components/Modals/AuthModal'
import { authModalState } from '@/atoms/authModalAtom'
type Props = {}
import {  useRecoilValue } from 'recoil'

const AuthPage = (props: Props) => {
  const authmodal=useRecoilValue(authModalState);
  return (
    <div className='relative'>
      <Navbar></Navbar>
      <div className="relative text-blue-200 text-8xl flex flex-col justify-center h-screen items-center">
        <h1>MECHANIC</h1>
        <h1 className='text-yellow-200'>Coder</h1>
      </div>
      {authmodal.isOpen && <AuthModal/>}
     </div>
  )
}

export default AuthPage
