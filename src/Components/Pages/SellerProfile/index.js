import React from 'react'
import SellerUserNav from '../../Reusable/SellerUserNav'
import './style.css'

const SellerProfile = () => {
  return (
    <div>
        <div className='browsePetWrapper'>
            <SellerUserNav />
            <div className='pupListWrapper seller'>
                <div className='pageHeadingSticky nonStick'>
                    <div>
                        <h1 className='buyPageHeading'>Seller Profile</h1>
                        <p className='buyPageInfo'>Change your password</p>
                    </div>
                </div>
                <div className='sellerprofile'>
                    {/* <h2>Change your password</h2> */}
                    <form className='profileForm security'>
                    <div className='formRow'>
                        <div>
                            <label>Current Password</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>New Password</label>
                            <input type="password"/>
                        </div>
                        <div>
                            <label>Confirm New Password</label>
                            <input type="password"/>
                        </div>
                        </div>
                    </form>
                    <button className='landingButtonMain secondary adopt'>Update Password</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerProfile