import logo from '../../../Assets/Logo.png'
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div>
            <img className='headerLogo' src={logo} />
            <Link className='navLink'>Browse Pups</Link>
            <Link className='navLink'>Shop</Link>
            <Link className='navLink'>Mating</Link>
            <Link className='navLink'>Adopt</Link>
        </div>
        <Link>Login</Link>
    </div>
  )
}

export default Header