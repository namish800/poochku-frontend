import React, { useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import MobileNav from '../../Reusable/MobileNav'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import User from '../../../Assets/userPic.png'
import './style.scss'
import { useParams } from 'react-router-dom';
import { Rating, Skeleton } from '@mui/material';

const SellerView = () => {
  const params = useParams();
  const [dogList, setDogList] = useState([])
  const [ratings, setRatings] = useState([])
  return (
    <div className='browsePetWrapper'>
        <DashNavUser />
        <div className='pupListWrapper'>
          <div className='pageHeadingSticky'>
            <div>
              <h1 className='buyPageHeading'>Seller Profile</h1>
              <p className='buyPageInfo'>Find your Seller details here!</p>
            </div>
          </div>
          <div className='sellerViewWrapper'>
            <div className='sellerDetailSection'>
              <div className='sellerDP' style={{background: `url(${User})`}}></div>
              <div className='sellerInfoWrapper'>
                <h3 className='sellerName'>Seller Name</h3>
                <p className='sellerLocation'>Delhi</p>
                <p className='sellerVerified'>Not Verified</p>
              </div>
            </div>
            <div className='sellerListingSection'>
              <Tabs className='sellerTabWrapper'>
                <TabList>
                  <Tab>Listed Dogs</Tab>
                  <Tab>Reviews & Ratings</Tab>
                </TabList>
                <TabPanel>
                  {dogList.length > 0 ? 
                    <p>Show Dog List</p> : 
                    <p>No Dogs Listed by the seller</p>  
                  }
                </TabPanel>
                <TabPanel>
                  <div className='ratingSectionWrapper'>
                    <h2>Leave a rating!</h2>
                    <div className='ratingFields'>
                      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <textarea rows={1} />
                        <Rating value={0} />
                      </div>
                      <button>Submit</button>
                    </div>
                  </div>
                  {
                    !ratings.length ? <p>No ratings yet.</p> : 
                      <p>Here are the ratings</p>
                  }
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <MobileNav />
    </div>
  )
}

export default SellerView