import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import './style.scss'
import enquiryApi from '../../../services/EnquiryApi';

const PopupModal = ({img, open, setOpen, heading, subheading}) => {
  const handleClose = () => setOpen(false);
  const userId = localStorage.getItem("userId");

  const enquiredPet = () => {
    enquiryApi.saveFindAPetEnquiry(userId)
  }

  return (
      <Modal
        open={open}
        onClose={handleClose}
        className='popupWrapper'
      >
        <div className='popUp'>
          <div className='modalActions'>
              <CloseIcon onClick={handleClose} />
          </div>
          <Box>
              {img && <img src={img} />}
              <p className='heading font-face-D'>{heading}</p>
              <p className='subHeading'>{subheading}</p>
              <div className='popupActions'>
                <a href='https://vdo2385601y.typeform.com/to/fBb79EOi' target='_blank' rel='noreferrer' className='formButton' onClick={enquiredPet}>Find Pooch</a>
                <button onClick={handleClose} className='closeButton'>Close</button>
              </div>
          </Box>
        </div>
      </Modal>
  )
}

export default PopupModal