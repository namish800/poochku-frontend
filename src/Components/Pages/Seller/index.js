import DogForSaleCard from '../../Reusable/DogForSaleCard'
import './style.scss'
import { Link } from 'react-router-dom'
import SellerUserNav from '../../Reusable/SellerUserNav'
import DashNavUser from '../../Reusable/DashNavUser'
import MobileSearch from '../../Reusable/MobileSearch'
import userApi from '../../../services/userApi'
import { useEffect, useState } from 'react'

const Seller = () => {
  const [dogList, setDogList] = useState([])
  const userId = localStorage.getItem("userId")
  const [search, setSearch] = useState("")

  // useEffect(async () => {
  //   if(userId){
  //     const data = await userApi.getUserById(userId)
  //     console.log(data, "seller data")
  //     if(data){
  //       setDogList(data.pets.pets_for_sell)
  //     }
  //   }
  // }, [])

  return (
    <div className='browsePetWrapper'>
        {/* <SellerUserNav /> */}
        <DashNavUser />
        <div className='pupListWrapper seller'>
          <div className='pageHeadingSticky nonStick'>
            <div>
              <h1 className='buyPageHeading'>Dashboard</h1>
              <p className='buyPageInfo'>List and sell your dogs here!</p>
            </div>
          </div>
          <MobileSearch/>
          <div className='sellerDashboardWrapper'>
            <h2 className='sellerHeading'>Your Active Listings</h2>
            <div className='sellerHeader'>
                <input type='text'placeholder='Search your listings' className='filterInput' />
                <Link to="/newDog/seller"><button className='filterButton'>+ NEW DOG</button></Link>
            </div>
            <hr />
            <div className='dogsForSaleWrapper'>
                {
                  dogList.map((dog, index)=>{
                    return(
                      <DogForSaleCard dogDetails={dog} />
                    )
                  })
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Seller