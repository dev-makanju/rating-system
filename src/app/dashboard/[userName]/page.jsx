import React from 'react'
import Layout from '../../../components/Layout';
import CardUI from '../../../components/dashboard/Card';
import UsePagination from '../../../components/dashboard/Pagination';

const UserPage = () => {
   const parentCard = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px , 1fr))',
      gridGap: '1em',
   }
  return (
     <Layout isActive={false} className="pb-5">
         <h1 className='mb-4 text-[#000000bf] font-bold text-2xl md:text-3xl'>Lecturer&prime;s &nbsp; rating</h1>
         <div style={parentCard} className="h-full">
            {courseData.map(course => (
               <CardUI key={course.id} courseItem={course}/>
            ))}
         </div>
         <div>
            <UsePagination/>
         </div>
     </Layout>
  )
}

export default UserPage