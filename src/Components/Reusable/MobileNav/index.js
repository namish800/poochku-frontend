import Dog from '../../../Assets/dog.png'
import WhiteDog from '../../../Assets/dog-white.png'
import Adopt from '../../../Assets/animal-rights.png'
import WhiteAdopt from '../../../Assets/animal-rights-white.png'
import Mating from '../../../Assets/gender-fluid.png'
import WhiteMating from '../../../Assets/gender-fluid-white.png'
import Shop from '../../../Assets/pet-shop.png'
import WhiteShop from '../../../Assets/pet-shop-white.png'
import User from '../../../Assets/user.png'
import WhiteUser from '../../../Assets/user-white.png'
import Logo from '../../../Assets/poochkuLogo.jpg'
import './style.scss'
import { Link, useLocation } from 'react-router-dom'

const MobileNav = () => {
    const location = useLocation();
  return (
    <div className='mobileNav'>
        <Link to="/browse" className={location.pathname.includes("browse") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={Browse} /> */}
        <img src={location.pathname.includes("browse") ? WhiteDog : Dog}/>
        </Link>
        <Link to="https://shop.poochku.in" className={location.pathname.includes("shop") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={PetShop}/> */}
        <img src={location.pathname.includes("shop") ? WhiteShop : Shop}/>
        </Link>
        <Link to="/" className={'DhashNavLink mobileHomeLink'}>
        {/* <img className='DashNavIcon' src={adopt}/> */}
        <img src={Logo}/>
        </Link>
        <Link to="/mating" className={location.pathname.includes("mating") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={dog}/> */}
        <img src={location.pathname.includes("mating") ? WhiteMating : Mating}/>
        </Link>
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={adopt}/> */}
        <img src={location.pathname.includes("useraccount") ? WhiteUser : User}/>
        </Link>
    </div>
  )
}

export default MobileNav