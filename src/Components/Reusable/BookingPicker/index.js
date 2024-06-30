import React, { useState } from 'react'
import { DtCalendar, DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'
import './style.scss'

const BookingPicker = ({currentSelection}) => {
    const [date, setDate] = useState(null);
    const [slot, setSlot] = useState(null);
    let confirmBooking = () => {
        console.log(currentSelection)
        console.log(date)
        console.log(slot)
        console.log(localStorage.getItem('userId'))
        
    }
  return (
    <div className='bookingPickerWrapper'>
        <div className='pickerWrapper'>
            <DtCalendar 
                onChange={setDate}
            />
        </div>
        <div className='slotWrapper'>
            <h4>Pick a Slot</h4>
            <div className={`timeSlot slot1 ${slot===1 ? "active" : ""}`} onClick={()=>{setSlot(1)}}>9:00am - 12:00pm</div>
            <div className={`timeSlot slot2 ${slot===2 ? "active" : ""}`} onClick={()=>{setSlot(2)}}>12:00pm - 3:00pm</div>
            <div className={`timeSlot slot3 ${slot===3 ? "active" : ""}`} onClick={()=>{setSlot(3)}}>3:00pm - 6:00pm</div>
            <div className={`timeSlot slot4 ${slot===4 ? "active" : ""}`} onClick={()=>{setSlot(4)}}>6:00pm - 9:00pm</div>
            <button className='confirmButton' onClick={confirmBooking}>Confirm Booking</button>
        </div>
    </div>
  )
}

export default BookingPicker