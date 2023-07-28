import React from 'react'
import DashNavUser from '../../Reusable/DashNavUser'
import "./style.css"

const Shop = () => {
  return (
<div className='browsePetWrapper'>
    <DashNavUser />
    <div className='pupListWrapper shop'>
        <div className='pageHeadingSticky'>
            <div>
                <h1 className='buyPageHeading'>Shop</h1>
                <p className='buyPageInfo'>For all your Pooch needs!</p>
            </div>
        {/* <Search /> */}
        </div>
        <div className='shopWrapper'>
            Coming Soon...
        </div>
    </div>
</div>
  )
}

export default Shop