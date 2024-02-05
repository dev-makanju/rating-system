'use client'
import React, {useState} from 'react'
import AuthLayout from '@/components/AuthLayout';
import Input from '../../../components/common/Input';
import { FormControl } from '@mui/base/FormControl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCourse } from '@/context/CourseContext';

const LoginPage = () => {
  const router = useRouter();
  const course = useCourse();
  const [input , setInput] = useState({})
  const handleInput = () => {
    course.setUser(true);
    router.push('/')
  }
  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center h-[100vh]'>
          <form className='border p-7 rounded-lg'>
            <h1 className="text-[#000] font-bold text-3xl mb-5">Login</h1>
            <div className='mb-5'>
              <Input holder={'Enter your email'} title={'Email'}/>
            </div>
            <div className='mb-5'>
              <Input holder={'Enter your password'} title={'Password'}/>
            </div>
            <FormControl>
              <button onClick={handleInput} className='bg-[#010066] text-white text-sm p-2 rounded-lg'>Submit</button>
            </FormControl>
          </form>
          <small className='mt-6'>No account? <Link className='text-[#010066] font-bold' href="/auth/register">sign up</Link></small>
      </div>
    </AuthLayout>
  )
}

export default LoginPage