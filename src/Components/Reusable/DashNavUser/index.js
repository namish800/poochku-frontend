import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import Pooches from '../../../Assets/pooches.png'
import DogVet from '../../../Assets/dog-vet.png'
import DogMating from '../../../Assets/dog-mating.png'
import DogService from '../../../Assets/services.png'
import './style.scss'
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
            <img className='DashNavIcon' src={Pooches} />
            <p className='font-face-D para'>Pooches</p>
          </Link>
          <Link to="/mating" className={location.pathname.includes("mating") ? 'DhashNavLink active' : 'DhashNavLink'}>
            <img className='DashNavIcon' src={DogMating}/>
            <p className='font-face-D para'>Paw Match</p>
          </Link>
          <Link to="/vets" className={location.pathname.includes("vets") ? 'DhashNavLink active' : 'DhashNavLink'}>
            <img className='DashNavIcon' src={DogVet}/>
            <p className='font-face-D para'>Vets</p>
          </Link>
          <Link to="https://shop.poochku.in" className={location.pathname.includes("shop") ? 'DhashNavLink active' : 'DhashNavLink'}>
            <img className='DashNavIcon' src={DogService}/>
            <p className='font-face-D para'>Shop</p>
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
        {!fName ? <Link to="/auth" className={'DhashNavLink bottom'} style={{textAlign:"center"}}>
            <p className='font-face-D para'>Login/ Sign Up</p>
        </Link> : 
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink bottom active' : 'DhashNavLink bottom'} style={{textAlign:"center"}}>
            <p className='font-face-D para'>User Account</p>
        </Link>
        }
        {
          fName && <Link to="/" className={'DhashNavLink bottom logout'} style={{textAlign:"center"}} onClick={handleLogout}>
          <p className='font-face-D para'>Logout</p>
      </Link>
        }
      </div>
    </div>
  )
}

export default DashNavUser