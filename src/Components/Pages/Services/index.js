import React, { useState } from 'react';
import DashNavUser from '../../Reusable/DashNavUser';
import SpaIcon from '../../../Assets/spaIcon.png';
import GroomingIcon from '../../../Assets/grooming.png'
import BoardingIcon from '../../../Assets/boardingIcon.png'
import VetCard from '../../Reusable/VetCard';
import './style.scss'

const services = {
  "G" : {
    serviceName: "Grooming",
    icon : GroomingIcon,
  },
  "S" : {
    serviceName: "Spa",
    icon: SpaIcon
  },
  "B" : {
    serviceName : "Boarding",
    icon: BoardingIcon
  }
}

const Services = () => {
  const [service, setService] = useState("G");
  const [serviceList, setServiceList] = useState([]);
  return (
    <div className='serviceListPage'>
        <DashNavUser />
        <div className='serviceListSection'>
            <div className='pageHeadingSticky'>
              <div>
                  <h1 className='buyPageHeading font-face-D'>Services</h1>
                  <p className='buyPageInfo'>Find service providers for your pooch, near you! </p>
              </div>
            </div>
            <div className='serviceSelector'>
              <p>Select a service</p>
              <select className='serviceDropdown'>
                <option className='serviceOptions' value="">Select a service</option>
                {Object.keys(services).map((ser, index) => {
                  return(<option value={ser} key={index}>{services[ser].serviceName}</option>)
                })}
              </select>
            </div>
            <div className='vetListWrapper'>
              {serviceList?.map((ser, index) => {
                  return(
                      <VetCard data={ser} key={index} />
                  )
              })}
            </div>
            {/* <div className='vetListWrapper'>
              {clinicList?.map((vet, index) => {
                  return(
                      <VetCard setOpen={setOpen} setCurrentSelection={setCurrentSelection} data={vet} key={index} />
                  )
              })}
            </div> */}
        </div>
    </div>
  )
}

export default Services