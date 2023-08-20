import React from 'react'
import SellerUserNav from '../../Reusable/SellerUserNav'
import './style.css'

const Billing = () => {
  return (
    <div className='browsePetWrapper'>
        <SellerUserNav />
        <div className='pupListWrapper seller'>
          <div className='pageHeadingSticky nonStick'>
            <div>
              <h1 className='buyPageHeading'>Billing</h1>
              <p className='buyPageInfo'>Monitor your billing</p>
            </div>
          </div>
          <div className='billingWrapper'>
            <div className='currentPlan'>
                <h3>Current Plan</h3>
                <div className='currentPlanWrapper'>
                    <p className='planName'><b>Free</b></p>
                    <div className='planDetails'>
                        <p className='validity'><b>Valid till</b> {`October, 2023`}</p>
                        {/* <p className='date'><b>Plan started on </b>{`August, 2023`}</p> */}
                    </div>
                </div>
            </div>
            <div className='previousBilling'>
                <h3>Previous Billing</h3>
                <hr/>
                <div className='bill'>
                    <div>
                        <p><b>Created on </b>{`20 August 2023`}</p>
                        <p><b>{`Free Plan`}</b></p>
                    </div>
                    <button>Download Invoice</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Billing