import { Modal, Box } from '@mui/material'
import EnquiryImage from '../../../Assets/enquiryImage.png'
import './style.scss'
import enquiryApi from '../../../services/EnquiryApi'

const EnquiryModal = ({open, setOpen}) => {

    const userId = localStorage.getItem("userId")

    const handleClose = () => {
        setOpen(false)
    }

    const enquiredPet = () => {
      enquiryApi.saveFindAPetEnquiry(userId)
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
            <p className='modalP'>Stay put and keep a check on your whatsapp... We'll find the pawfect match for you! </p>
            <a href='https://vdo2385601y.typeform.com/to/fBb79EOi' target='_blank' rel='noreferrer' className='landingButtonMain secondary adopt' onClick={enquiredPet}>Find me a pooch!</a>
            {/* <button className='landingButtonMain secondary adopt' onClick={handleClose}>Okay</button> */}
          </div>
          <img className='enquiryImage' src={EnquiryImage} />
        </Box>
      </Modal>
    </div>
  )
}

export default EnquiryModal