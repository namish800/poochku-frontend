import { Modal, Box } from '@mui/material'
import EnquiryImage from '../../../Assets/enquiryImage.png'
import './style.css'

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
          <div>
            <h1>We hear you!</h1>
            <p>Stay put and keep a check on your whatsapp... We'll find the pawfect match for you! </p>
            <button className='landingButtonMain secondary adopt' onClick={handleClose}>Okay</button>
          </div>
          <img className='enquiryImage' src={EnquiryImage} />
        </Box>
      </Modal>
    </div>
  )
}

export default EnquiryModal