import happy from "../../../Assets/happy.png"
import DashNavUser from '../../Reusable/DashNavUser'
import "./style.css"
import MobileNav from '../../Reusable/MobileNav'

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
        <div className='addMatingDog'>
          <img src={happy} />
          <h1>Coming Soon!</h1>
          {/* <button className='landingButtonMain secondary adopt'>Add a Dog</button> */}
        </div>
    </div>
    <MobileNav/>
</div>
  )
}

export default Shop