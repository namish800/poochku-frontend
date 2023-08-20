import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css'
import SellerUserNav from '../../Reusable/SellerUserNav';

const Plans = () => {
  return (
    <div className='browsePetWrapper'>
        <SellerUserNav />
        <div className='pupListWrapper seller'>
            <div className='pageHeadingSticky nonStick'>
                <div>
                <h1 className='buyPageHeading'>Plans</h1>
                <p className='buyPageInfo'>Upgrade your plan</p>
                </div>
            </div>
            <div className='planWrapper'>
                <Tabs>
                    <TabList>
                        <Tab>Monthly</Tab>
                        <Tab>Annual</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='monthlyPlanWrapper'>
                            <div className='plan'>
                                <div className='planHighlight current'>
                                    <p className='planName'>Free</p>
                                    <p className='planPrice'> ₹ 0</p>
                                    <p>Per Month</p>
                                    <button className='currentPlan'>Current Plan</button>
                                </div>
                                <ul className='planFeatures'>
                                    <li>5 Listings at a time</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </div>
                            <div className='plan'>
                                <div className='planHighlight'>
                                    <p className='planName'>Premium</p>
                                    <p className='planPrice'> ₹ 6,000</p>
                                    <p>Per Month</p>
                                    <button className='currentPlan'>Upgrade Plan</button>
                                </div>
                                <ul className='planFeatures'>
                                    <li>Unlimited Listings</li>
                                    <li>Direct buyer inquiries</li>
                                    <li>Access to the Inner Circle</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='annualPlanWrapper'>
                            <div className='plan'>
                                <div className='planHighlight current'>
                                    <p className='planName'>Free</p>
                                    <p className='planPrice'> ₹ 0</p>
                                    <p>Per Year</p>
                                    <button className='currentPlan'>Current Plan</button>
                                </div>
                                <ul className='planFeatures'>
                                    <li>5 Listings at a time</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </div>
                            <div className='plan'>
                                <div className='planHighlight'>
                                    <p className='planName'>Premium</p>
                                    <p className='planPrice'> ₹ 55,000</p>
                                    <p>Per Year</p>
                                    <button className='currentPlan'>Upgrade Plan</button>
                                </div>
                                <ul className='planFeatures'>
                                    <li>Unlimited Listings</li>
                                    <li>Direct buyer inquiries</li>
                                    <li>Access to the Inner Circle</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Plans