'use client'
import usePagination from '@mui/material/usePagination';

export default function UsePagination() {

  return (
    <>
      <nav className="flex gap-2 mt-5 w-full justify-end">
         <div>
         <small className='text-[#000000bf]'>page 1 of 5</small>
         </div> 
         <button className="border-2 border-gray-100 pl-2 pr-2 rounded-lg text-[#000000bf]">prev</button>
         <button className="border-2 border-gray-100 pl-2 pr-2 rounded-lg text-[#000000bf]">next</button>
      </nav>
      <div className='h-[50px]'></div>
    </>
  );
}
