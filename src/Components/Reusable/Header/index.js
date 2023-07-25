import logo from '../../../Assets/Logo.png'
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div>
            <img className='headerLogo' src={logo} />
            <Link className='navLink' to="/browse">Browse Pups</Link>
            <Link className='navLink' to="/browse">Shop</Link>
            <Link className='navLink' to="/mating">Mating</Link>
            <Link className='navLink' to="/adopt">Adopt</Link>
            <Link className='navLink' to="/services">Services</Link>
        </div>
        <div>
          <Link className='navLink' to="/seller">Seller Account</Link>
          <Link className='navLink'>Login</Link>
        </div>
    </div>
  )
}

export default Header