import React from 'react'
import { Modal, Box } from '@mui/material'

const EnquiryModal = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false)
    }
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="enquiryModal">
          <h1>We hear you!</h1>
          <p>Stay put... We'll find the pawfect match for you!</p>
          <button className='landingButtonMain secondary adopt' onClick={handleClose}>Okay</button>
        </Box>
      </Modal>
    </div>
  )
}

export default EnquiryModal