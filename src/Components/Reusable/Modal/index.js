import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const Modal = ({open, setOpen, heading, subheading, callback = () => {}}) => {
    
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    callback()
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='modalActions'>
            <CloseIcon />
        </div>
        <Box sx={{}}>
            <p className='heading'>{heading}</p>
            <p className='subHeading'>{subheading}</p>

            <button className='button'>Close</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Modal