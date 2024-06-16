import { Box, Modal } from '@mui/material'
import EnquiryImage from '../../../Assets/enquiryImage.png'
import './style.scss'
import BookingPicker from '../BookingPicker'

const BookingPopUp = ({open, setOpen, currentSelection, setCurrentSelection}) => {
    const handleClose = () => {
        setOpen(false);
        setCurrentSelection({})
    }
  return (
    <div className='bookingPopUpWrapper'>
        <Modal
            open={open}
            className='bookbookingPopUpModal'
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        > 
        <Box className="BookingPopUP">
            {/* <pre>{JSON.stringify(currentSelection, null, 2)}</pre> */}
          <div>
            <div className='slotDetails'>
                {/* <pre>{JSON.stringify(currentSelection, null, 2)}</pre> */}
                <img src={currentSelection?.image?.url}/>
                <p><b>{currentSelection?.name}</b></p>
                <p>{currentSelection?.address}</p>
                <a href={currentSelection?.directionUrl || "#"}>Get Directions</a>
            </div>
            {/* <h1 className='font-face-D'>Book Clinic Visit</h1> */}
          </div>
          <div className='popUpBooking'>
            <BookingPicker currentSelection={currentSelection}/>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default BookingPopUp