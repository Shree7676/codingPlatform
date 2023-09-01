import React, { useEffect } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

type Props = {}

const AuthModal = (props: Props) => {
  const authModal = useRecoilValue(authModalState)
  const closeModal = useClose();
  return (
    <div className="absolute flex flex-col items-center justify-center z-50 h-[calc(100vh-5rem)]">
        <div className="bg-white p-6 rounded-lg w-96 shadow-md">
	    <div className='flex justify-end'>
		<a onClick={closeModal} href="#" className='text-black '>X</a>
	    </div>
		{authModal.type==='login'? <Login/> :authModal.type==='register'?<SignUp/> : <ResetPassword/>}
	</div>
    </div>

  )
}

export default AuthModal

function useClose(){
  const setAuthModal = useSetRecoilState(authModalState);

  const closeModal=()=>{
    setAuthModal((prev)=>({...prev,isOpen:false,type:'login'}))
  };
  useEffect(()=>{
    const handleEsc = (e:KeyboardEvent)=>{
      if (e.key==='Escape')closeModal();
    };
    window.addEventListener('keydown',handleEsc);
    return ()=>window.removeEventListener('keydown',handleEsc);
  },[]);
  return closeModal;
}
