import React from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import DogForSaleCard from '../../Reusable/DogForSaleCard'
import './style.css'

const Seller = () => {
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper mating'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Dashboard</h1>
              <p className='buyPageInfo'>List and sell your dogs here!</p>
            </div>
          </div>
          <div>
            <div>
                <h2>Your Active Listings</h2>
                <button>+ New Dog</button>
            </div>
            <hr />
            <div className='dogsForSaleWrapper'>
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Seller