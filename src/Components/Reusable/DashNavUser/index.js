import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import dog from '../../../Assets/dog.png'
import Browse from '../../../Assets/browse.png'
import PetShop from '../../../Assets/pet-shop.png'
import adopt from '../../../Assets/animal-rights.png'
import './style.css'
import { useEffect } from 'react'
import { useAuth } from "../../Auth/AuthContext";

const DashNavUser = () => {
  const fName = localStorage.getItem('fName');
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, login, logout } = useAuth();


  const handleLogout = () => {
    logout()
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
            <p className='font-face-D para'>Pooches</p>
          </Link>
          {/* <Link to="/shop" className={location.pathname.includes("shop") ? 'DhashNavLink active' : 'DhashNavLink'}>
            <img className='DashNavIcon' src={PetShop}/>
            <p className='font-face-D para'>Shop</p>
          </Link> */}
          <Link to="/mating" className={location.pathname.includes("mating") ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={dog}/> */}
            <p className='font-face-D para'>Mating</p>
          </Link>
          <Link to="/vets" className={location.pathname.includes("vets") ? 'DhashNavLink active' : 'DhashNavLink'}>
            <p className='font-face-D para'>Vets</p>
          </Link>
          {/* <Link to="/adopt" className={(location.pathname.includes("adopt") && !location.pathname.includes("adoption")) ? 'DhashNavLink active' : 'DhashNavLink'}>
            <img className='DashNavIcon' src={adopt}/>
            <p className='font-face-D para'>Adopt</p>
          </Link> */}
        </div>}
        {
          location.pathname.toLowerCase().includes("sellerdashboard") &&
          <div className='linkWrapper'>
            <Link to="/sellerdashboard" className={location.pathname.includes("sellerdashboard") && !location.pathname.includes("billing") ? `DhashNavLink active` : "DhashNavLink"}>
            {/* <img className='DashNavIcon' src={Browse} /> */}
            <p className='font-face-D para'>Dashboard</p>
          </Link>
          <Link to="/sellerdashboard/billing" className={location.pathname.includes("billing") ? `DhashNavLink active` : "DhashNavLink"}>
            {/* <img className='DashNavIcon' src={PetShop}/> */}
            <p className='font-face-D para'>Billing</p>
          </Link>
          </div>
        }
      </div>
      <div>
        {!fName ? <Link to="/auth" className={'DhashNavLink'} style={{textAlign:"center"}}>
            <p className='font-face-D para'>Login/ Sign Up</p>
        </Link> : 
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink active' : 'DhashNavLink'} style={{textAlign:"center"}}>
            <p className='font-face-D para'>User Account</p>
        </Link>
        }
        {
          fName && <Link to="/" className={'DhashNavLink logout'} style={{textAlign:"center"}} onClick={handleLogout}>
          <p className='font-face-D para'>Logout</p>
      </Link>
        }
      </div>
    </div>
  )
}

export default DashNavUser