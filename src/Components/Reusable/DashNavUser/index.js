import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import dog from '../../../Assets/dog.png'
import Browse from '../../../Assets/browse.png'
import PetShop from '../../../Assets/pet-shop.png'
import adopt from '../../../Assets/animal-rights.png'
import './style.css'
import { useEffect } from 'react'

const DashNavUser = () => {
  const fName = localStorage.getItem('fName');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  }
  
  return (
    <div className='DashNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        {!location.pathname.toLowerCase().includes("sellerdashboard") &&
          <div className='linkWrapper'>
          <Link to="/browse" className={location.pathname.toLowerCase().includes("browse") || location.pathname.toLowerCase().includes("viewdog") ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={Browse} /> */}
            <p>Buy Pooch</p>
          </Link>
          <Link to="/shop" className={location.pathname.includes("shop") ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={PetShop}/> */}
            <p>Shop</p>
          </Link>
          <Link to="/mating" className={location.pathname.includes("mating") ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={dog}/> */}
            <p>Mating</p>
          </Link>
          <Link to="/adopt" className={(location.pathname.includes("adopt") && !location.pathname.includes("adoption")) ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={adopt}/> */}
            <p>Adopt</p>
          </Link>
        </div>}
        {
          location.pathname.toLowerCase().includes("sellerdashboard") &&
          <div className='linkWrapper'>
            <Link to="/sellerdashboard" className={location.pathname.includes("sellerdashboard") && !location.pathname.includes("billing") ? `DhashNavLink active` : "DhashNavLink"}>
            {/* <img className='DashNavIcon' src={Browse} /> */}
            <p>Dashboard</p>
          </Link>
          <Link to="/sellerdashboard/billing" className={location.pathname.includes("billing") ? `DhashNavLink active` : "DhashNavLink"}>
            {/* <img className='DashNavIcon' src={PetShop}/> */}
            <p>Billing</p>
          </Link>
          </div>
        }
      </div>
      <div>
        {!fName ? <Link to="/auth" className={'DhashNavLink'} style={{textAlign:"center"}}>
            <p>Login/ Sign Up</p>
        </Link> : 
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink active' : 'DhashNavLink'} style={{textAlign:"center"}}>
            <p>User Account</p>
        </Link>
        }
        {
          fName && <Link to="/" className={'DhashNavLink logout'} style={{textAlign:"center"}} onClick={handleLogout}>
          <p>Logout</p>
      </Link>
        }
      </div>
    </div>
  )
}

export default DashNavUser