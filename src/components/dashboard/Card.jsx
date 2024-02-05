import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

const CardUI = (props) => {
   return (
      <Card className="sm:h-[370px]">
         <div className="bg-[#833ce7] flex justify-center items-center font-bold h-[110px] w-full">
            <h1 className='text-white text-3xl md:text-5xl'>{props.courseItem.course_code}</h1>
         </div>
         <CardContent>
         <Typography className="text-[#000000bf]" gutterBottom variant="h5" component="div">
            {props.courseItem.lecturer_name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
            { props.courseItem.course_desc }
         </Typography>
         <Stack className="mt-3" direction="row" spacing={1}>
            <small className="text-[#000000bf]">rating</small>
            <Rating size="small" name="half-rating-read" defaultValue={props.courseItem.rating} precision={0.5} readOnly />
         </Stack>
         </CardContent>
         <CardActions>
            <Button size="small">Share</Button>
            <Link className='text-[#010066] font-bold' href={`/dashboard/course/${props.courseItem.id}`}>
               <Button size="small">View More</Button>
            </Link>
         </CardActions>
      </Card>
   )
}

export default CardUI