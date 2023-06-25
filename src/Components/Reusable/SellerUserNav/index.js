import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'

import './style.css'

const SellerUserNav = () => {
  return (
    <div className='sellerNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        <Link to="/browse" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={Browse} /> */}
          <p>Your Listings</p>
        </Link>
        <Link to="/browse" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={PetShop}/> */}
          <p>List New Dog</p>
        </Link>
        <Link to="/mating" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={dog}/> */}
          <p>Billing</p>
        </Link>
        <Link to="/adopt" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={adopt}/> */}
          <p>Help</p>
        </Link>
        <Link to="/adopt" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={adopt}/> */}
          <p>FAQs</p>
        </Link>
      </div>
      {/* <div>
        <Link to="/seller" className='DhashNavLink' style={{textAlign:"center"}}>
            <p>Sell with us</p>
        </Link>
      </div> */}
    </div>
  )
}

export default SellerUserNav