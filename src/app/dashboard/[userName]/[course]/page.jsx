'use client'
import React, {useEffect, useState} from 'react'
import Layout from '../../../../components/Layout';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import { useParams } from 'next/navigation';
import {useCourse} from '../../../../context/CourseContext'

const SingleCourse = () => {
  const [data , setData] = useState(null)
  const course = useCourse()
  const params = useParams()

  // useEffect(() => {
  //   const single_course = course.courses.review.filter((items) => items.id === params.course) 
  //   setData(single_course[0]);
  // },[data])
  // const dataItem = data;
  
  return (
    <Layout>
      <h1 className="text-[#000000bf] text-3xl mb-3">Lecturer’s Review</h1>
      <div className='border-2 border-gray-100 rounded-md flex flex-col gap-4 p-1 sm:p-8'>
        <div>
          <h3 className="text-[#000000bf] text-xl">Review:</h3>
          <div className='border border-gray-300 w-full p-2'>
            <p>This lecturer provide an easy access for student to lean, ask questions, but the class is not interactive enough. A decent lecturer but needs to improve.</p>
          </div>
        </div>
        <div>
          <h3 className="text-[#000000bf] text-xl">Interpersonal Skills:</h3> 
          <ul className='flex flex-col gap-4'>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Communication:</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#fff] bg-[blue] hover:bg-[#eee] text-sm">2</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">3</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">4</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Promptness:</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">2</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">3</Button>
              <Button className="text-[#fff] bg-[blue] hover:bg-[#eee] text-sm">4</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Accessibility:</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">2</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">3</Button>
              <Button className="text-[#fff] bg-[blue] hover:bg-[#eee] text-sm">4</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Inspiration :</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">2</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">3</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">4</Button>
              <Button className="text-[#fff] bg-[blue] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
        </ul>
        </div>
        <div>
          <h3 className="text-[#000000bf] text-xl">Overall Rating:</h3>
          <Rating name="size-large" defaultValue={2} size="large" />
        </div>        
      </div>
    </Layout>
  )
}

export default SingleCourse