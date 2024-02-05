'use client';
import React, {useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avater from '../assets/pdav.jpeg'
import SearhInput from '../components/common/SearchInput'
import Link from 'next/link';
import { useCourse } from '@/context/CourseContext';

const Mainlayout = (props) => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }))
  const user = useCourse();
  
  return (
    <div> 
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-[#010066]">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              RATING 
            </Typography>
            <div className="flex  items-center gap-2">
              <SearhInput></SearhInput>
              <Link className="font-bold" href="/auth/login">Sign In</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex flex-col md:flex-row gap-4 m-auto mt-8  mr-[1rem] ml-[1rem] md:mr-[2rem] md:ml-[2rem]">
        {user.user && 
          <div className='mt-[3rem]'>
           <div className="flex flex-col justify-center items-center border-2 border-gray-100 rounded-md md:max-w-[400px] p-10">
             <Stack direction="row" spacing={2}>
               <Avatar
                 alt="Remy Sharp"
                 src=''
                 sx={{ width: 150, height: 150 }}
               />
             </Stack>
             <h1 className='text-[#000000bf] text-sm md:text-2xl'>Remy Sharp</h1>
             <small className='text-[#000000bf]'>remysharp@gmail.com</small>
           </div> 
          </div>
        }
        <div className='w-full'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Mainlayout;
