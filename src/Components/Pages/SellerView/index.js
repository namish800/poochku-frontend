import React, { useEffect, useState } from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import MobileNav from '../../Reusable/MobileNav'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import User from '../../../Assets/userPic.png'
import './style.scss'
import { useParams } from 'react-router-dom';
import { Rating, Skeleton } from '@mui/material';
import userApi from '../../../services/userApi';
import DogCard from '../../Reusable/DogCard.js';
import ratingsApi from '../../../services/ratingsApi.js';


const SellerView = () => {
  const params = useParams();
  const [dogList, setDogList] = useState([])
  const [userDetails, setUserDetails] = useState({});
  const [ratings, setRatings] = useState([]);
  const [userInputRating, setUserInputRating] = useState(0);
  const [userInputComment, setUserInputComment] = useState("");
  useEffect(()=>{
    async function fetchDogList() {
      let userId = params.id;
      const data = await userApi.getUserById(userId);
      setUserDetails({
        name: data.fName + " " + data.lName,
        address: data.address,
        verified_status: data.seller_status
      })
      setDogList(data.pets.pets_for_sell);
    }

    async function fetchRatings() {
      let sellerId = params.id;
      const data = await ratingsApi.getRatingsForSeller(sellerId);
      console.log(data)
      setRatings(data?.ratings)
    }
    fetchDogList();
    fetchRatings();
  }, [])

  const submitRating = async ()=>{
    const ratingDto = {
      user_id: localStorage.getItem('userId'),
      rating: userInputRating,
      comment: userInputComment
    }
    let sellerId = params.id;
    const data = await ratingsApi.addRating(sellerId, ratingDto);
    console.log(data);
    ratings.push(data);
    setRatings(ratings);
    setUserInputRating(0);
    setUserInputComment("");
  }
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
                <h3 className='sellerName'>{userDetails.name ? userDetails.name : "Seller Name"}</h3>
                <p className='sellerLocation'>{userDetails.address ? userDetails.address : "No Address"}</p>
                <p className='sellerVerified'>{userDetails.verified_status ? userDetails.verified_status : "Not Verified"}</p>
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
                    dogList?.map((e, index) => {
                      return(
                        <DogCard details={e} key={index}/>
                      )
                    }) : 
                    <p>No Dogs Listed by the seller</p>  
                  }
                </TabPanel>
                <TabPanel>
                  <div className='ratingSectionWrapper'>
                    <h2>Leave a rating!</h2>
                    <div className='ratingFields'>
                      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <textarea value={userInputComment} rows={1} onChange={(e) => setUserInputComment(e.target.value)}/>
                        <Rating value={userInputRating} onChange={(e) => setUserInputRating(e.target.value)}/>
                      </div>
                      <button onClick={submitRating}>Submit</button>
                    </div>
                  </div>
                  {
                    !ratings.length ? <p>No ratings yet.</p> :
                      // <p>Here are the ratings</p>
                    ratings?.map((rating, index) => {
                        return(
                          <div>
                            <textarea readonly rows={1} value={rating.comment} />
                              <Rating readOnly value={rating.rating} />
                              <p>By {rating.user_name}</p>
                          </div>
                        )
                      })
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