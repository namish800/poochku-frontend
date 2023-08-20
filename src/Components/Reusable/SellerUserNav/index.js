import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'

import './style.css'

const SellerUserNav = () => {
  const location = useLocation();

  return (
    <div className='sellerNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        <Link to="/sellerdashboard" className={location.pathname.includes("sellerdashboard") ? `DhashNavLink active` : "DhashNavLink"}>
          {/* <img className='DashNavIcon' src={Browse} /> */}
          <p>Dashboard</p>
        </Link>
        <Link to="/billing" className={location.pathname.includes("billing") ? `DhashNavLink active` : "DhashNavLink"}>
          {/* <img className='DashNavIcon' src={PetShop}/> */}
          <p>Billing</p>
        </Link>
        <Link to="/pricing" className={location.pathname.includes("pricing") ? `DhashNavLink active` : "DhashNavLink"}>
          {/* <img className='DashNavIcon' src={dog}/> */}
          <p>Plans</p>
        </Link>
        <Link to="/sellerprofile" className={location.pathname.includes("sellerprofile") ? `DhashNavLink active` : "DhashNavLink"}>
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