import React from 'react';
import Image from 'next/image'
import OAU from '../assets/oau.png'

const AuthLayout = (props) => {
  return (
   <div className='flex h-screen'>
      <div className='hidden lg:flex flex-col items-center justify-center w-[40%] bg-[#010066]'>
         <Image
            src={OAU}
            width={300}
            height={300}
            alt="OAU Logo"
         />
         <h1 className="text-white text-3xl mt-3">Obafemi Awolowo University</h1>
         <small className="text-white text-2xl mt-2">Lecturer Rating System</small>
      </div>
      <div className='w-full lg:w-[60%]'>
         {props.children}
      </div>    
   </div>
  )
}

export default AuthLayout