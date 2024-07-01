import React, { useEffect, useState } from 'react'
import './style.scss'
import DashNavUser from '../../Reusable/DashNavUser'
import MobileNav from '../../Reusable/MobileNav'
import VetCard from '../../Reusable/VetCard'
import data from './data'
import vetApi from '../../../services/vetApi'
import { useLocation, useNavigate } from 'react-router-dom';
import BookingPopUp from '../../Reusable/BookingPopUp'
import PrivateRoute from '../../Auth/PrivateRoute'
import { useAuth } from "../../Auth/AuthContext";


const Vets = () => {

    const [vetList, setVetList] = useState([]);
    const [clinicList, setClinicList] = useState([]);
    const [city, setCity] = useState('');
    const [currentSelection, setCurrentSelection] = useState({});
    const [open, setOpen] = useState(false) 
    const [ view, setView ] = useState("doctor");
    const { isLoggedIn, login, logout } = useAuth();


    const getVetList = async () => {
        try{
          const response = await vetApi.getDoctors(city);
          console.log(response.data)
          if(response.status===200){
            setVetList(response.data.doctors)
          } else {
            console.log("Request failed ", response)
          }
          
        }
        catch(err){
          console.log(err)
        }
    }
    
    const getClinicList = async () => {
        try{
          const response = await vetApi.getClinics(city, 'clinic');
          console.log(response.data)
          if(response.status===200){
            setClinicList(response.data.clinics)
          } else {
            console.log("Request failed ", response)
          }
        }
        catch(err){
          console.log(err)
        }
    }


    useEffect(()=>{
        getVetList()
        getClinicList()
      }, [])
    return (
    <div className='vetListPage'>
        <DashNavUser />
        <div className='vetListSection'>
            <div className='pageHeadingSticky'>
              <div>
                  <h1 className='buyPageHeading font-face-D'>Vets</h1>
                  <p className='buyPageInfo'>Best healthcare for your pooch, always!</p>
              </div>
            </div>
            {/* <div className='pageSelector'>
              <button 
                className={`selectorButton font-face-D para ${view ==="doctor" ? "active" : ""}`} 
                onClick={()=>{
                  setView("doctor");
                }}>
                Doctors
              </button>
              <button 
                className={`selectorButton font-face-D para ${view ==="clinic" ? "active" : ""}`}
                onClick={() => {
                setView("clinic");
                }}>
                Clinics
              </button>
            </div> */}
            {/* {
              view === "doctor" && <div className='vetListWrapper'>
                {vetList?.map((vet, index) => {
                    return(
                        <VetCard data={vet} key={index} />
                    )
                })}
              </div>
            } */}
            
              {/* view === "clinic" &&  */}
            <div className='vetListWrapper'>
              {clinicList?.map((vet, index) => {
                  return(
                      <VetCard setOpen={setOpen} setCurrentSelection={setCurrentSelection} data={vet} key={index} />
                  )
              })}
            </div>
            
        </div>
        <MobileNav />
        <BookingPopUp open={open} setOpen={setOpen} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} />
    </div>
    )
}

export default Vets