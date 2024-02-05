import React from 'react'
import Layout from '../../../../components/Layout';
import LecturerTable from '../../../../components/dashboard/LecturerTable';

const Page = () => {
   return (
      <Layout>
         <div className='border-2 border-gray-100 rounded-md flex flex-col gap-4 p-1 sm:p-8'>
           <LecturerTable/>
         </div>
      </Layout>
   )
}

export default Page