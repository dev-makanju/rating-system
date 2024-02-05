'use client'
import { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [courses, setCourses] = useState({
      review: [
         {
            id:'1',
            course_id: '1',
            review: "This lecturer provide an easy access for student to leann, ask questions, promote class interaction. A decent lecturer.",
            communication:'4',
            promptness:'3',
            assesibility: '4',
            inspiration:'5'
         },
         {
            id:'2',
            course_id: '4',
            review: "This lecturer provide an easy access for student to lean, ask questions, but the class is not interactive enough. A decent lecturer but needs to improve.",
            communication:'4',
            promptness:'3',
            assesibility: '4',
            inspiration:'5'
         },
         {
            id:'3',
            course_id: '3',
            review: "This lecturer provide an easy access for student to lean build confident and improve communication. A great lecturer.",
            communication:'4',
            promptness:'3',
            assesibility: '4',
            inspiration:'5'
         },
         {
            id:'4',
            course_id: '2',
            review: "This lecturer provide an easy access for student to leann, ask questions, promote class interaction. A decent lecturer.",
            communication:'4',
            promptness:'3',
            assesibility: '3',
            inspiration:'3'
         },
         {
            id:'5',
            course_id: '5',
            review: "This lecturer does not provide an easy access for student to leann, ask questions, promote class interaction. A bad lecturer but decent when it comes to insiring student.",
            communication:'2',
            promptness:'1',
            assesibility: '1',
            inspiration:'4'
         },
      ],
      courseData: [
         {
            id:'1',
            course_code: 'CSC 405',
            course_desc: "Master the principles of system development, from requirements gathering to deployment, ensuring efficient and scalable software solutions.",
            lecturer_name:'Dr Kolade',
            rating:3.5
         },
         {
            id:'2',
            course_code: 'CSC 407',
            course_desc: "Explore the intricate world of information systems, covering databases, networks, and business processes for effective data management.",
            lecturer_name:'Mr Adeoye',
            rating:4.5
         },
         {
            id:'3',
            course_code: 'CSC 401',
            course_desc: "Immerse yourself in the realm of Artificial Intelligence, delving into machine learning, neural networks, and intelligent systems for advanced problem-solving.",
            lecturer_name:'Mrs Folashade',
            rating:2
         },
         {
            id:'4',
            course_code: 'CSC 415',
            course_desc: " Learn database design, data warehousing, and data governance for effective and secure information storage and retrieval",
            lecturer_name:'Mr Majekodunmi',
            rating:3.5
         },
         {
            id:'5',
            course_code: 'CSC 408',
            course_desc: "This course teaches hardware and software, artificial intelligence, and control systems to design and build intelligent robots for various applications",
            lecturer_name:'Mr Makanju',
            rating:1
         }
      ],
   })

   return (
      <CourseContext.Provider value={{ 
         courses,
         setCourses,
         user, 
         setUser,
      }}>
         {children}
      </CourseContext.Provider>
   )
}

export const useCourse = () => {
   return useContext(CourseContext);
} 
