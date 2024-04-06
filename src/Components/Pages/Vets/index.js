import React from 'react'
import './style.scss'
import DashNavUser from '../../Reusable/DashNavUser'
import MobileNav from '../../Reusable/MobileNav'
import VetCard from '../../Reusable/VetCard'
import data from './data'

const Vets = () => {
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
            <div className='vetListWrapper'>
                {data?.map((vet, index) => {
                    return(
                        <VetCard data={vet} key={index} />
                    )
                })}
            </div>
        </div>
        <MobileNav />
    </div>
  )
}

export default Vets