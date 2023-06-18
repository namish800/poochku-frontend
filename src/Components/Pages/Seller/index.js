import React from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import DogForSaleCard from '../../Reusable/DogForSaleCard'
import './style.css'
import dogList from '../Pups/dogBuyList'
import { Link } from 'react-router-dom'

const Seller = () => {
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper mating'>
          <div className='pageHeadingSticky nonStick'>
            <div>
              <h1 className='buyPageHeading'>Dashboard</h1>
              <p className='buyPageInfo'>List and sell your dogs here!</p>
            </div>
          </div>
          <div>
            <h2 className='sellerHeading'>Your Active Listings</h2>
            <div className='sellerHeader'>
                <input type='text'placeholder='Search your listings' className='filterInput' />
                <Link to="/newDog"><button className='filterButton'>+ NEW DOG</button></Link>
            </div>
            <hr />
            <div className='dogsForSaleWrapper'>
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
                <DogForSaleCard />
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