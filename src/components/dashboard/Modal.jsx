import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const style = {
  margin: '2rem auto',
  boxShadow: 24,
  p: 2,
};


export default function BasicModal(props) {
   const blue = {
      100: '#DAECFF',
      200: '#b6daff',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0072E5',
      900: '#003A75',
    };
  
    const grey = {
      50: '#F3F6F9',
      100: '#E5EAF2',
      200: '#DAE2ED',
      300: '#C7D0DD',
      400: '#B0B8C4',
      500: '#9DA8B7',
      600: '#6B7A90',
      700: '#434D5B',
      800: '#303740',
      900: '#1C2025',
    };
  
    const Textarea = styled(BaseTextareaAutosize)(
      ({ theme }) => `
      box-sizing: border-box;
      width: 100%;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
      border-radius: 12px 12px 0 12px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
  
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
   );
   const handleClose = () => {
    props.closeModal(false)
  }

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} maxRows={3} className="bg-white w-[250px] md:w-[400px]">
        <div className='flex flex-col md:gap-4'>
        <div>
          <h3 className="text-[#000000bf] text-sm mb-2 font-bold">Review:</h3>
          <Textarea aria-label="empty textarea" placeholder="Empty" />
        </div>
        <div>
          <h3 className="text-[#000000bf] text-sm font-bold">Interpersonal Skills:</h3> 
          <ul className='flex flex-col mt-2 md:gap-4'>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Communication:</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">2</Button>
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
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">4</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
          <li className='flex gap-3 flex-col sm:items-center sm:flex-row'>
            <p className="text-[#000000bf] text-sm">Accessibility:</p>
            <ButtonGroup aria-label="outlined primary button group">
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">1</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">2</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">3</Button>
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">4</Button>
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
              <Button className="text-[#000000bf] hover:bg-[#eee] text-sm">5</Button>
            </ButtonGroup>
          </li>
        </ul>
        </div>
        <div>
         <Button className="text-[#fff] mt-4 bg-[#010066] hover:bg-[#010066] w-[100px] text-sm">Submit</Button>
        </div>        
      </div>
        </Box>
      </Modal>
    </div>
  );
}
