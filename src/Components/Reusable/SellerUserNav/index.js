import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'

import './style.css'

const SellerUserNav = () => {
  
  return (
    <div className='sellerNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        <Link to="/seller" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={Browse} /> */}
          <p>Dashboard</p>
        </Link>
        <Link to="/billing" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={PetShop}/> */}
          <p>Billing & Plans</p>
        </Link>
        <Link to="/support" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={dog}/> */}
          <p>Support</p>
        </Link>
        <Link to="/profile" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={adopt}/> */}
          <p>My Account</p>
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