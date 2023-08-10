import Dog from '../../../Assets/dog.png'
import Adopt from '../../../Assets/animal-rights.png'
import Mating from '../../../Assets/gender-fluid.png'
import Shop from '../../../Assets/pet-shop.png'
import User from '../../../Assets/user.png'
import './style.css'
import { Link, useLocation } from 'react-router-dom'

const MobileNav = () => {
    const location = useLocation();
  return (
    <div className='mobileNav'>
        <Link to="/browse" className={location.pathname.includes("browse") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={Browse} /> */}
        <img src={Dog}/>
        </Link>
        <Link to="/shop" className={location.pathname.includes("shop") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={PetShop}/> */}
        <img src={Shop}/>
        </Link>
        <Link to="/mating" className={location.pathname.includes("mating") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={dog}/> */}
        <img src={Mating}/>
        </Link>
        <Link to="/adopt" className={location.pathname.includes("adopt") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={adopt}/> */}
        <img src={Adopt}/>
        </Link>
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink active' : 'DhashNavLink'}>
        {/* <img className='DashNavIcon' src={adopt}/> */}
        <img src={User}/>
        </Link>
    </div>
  )
}

export default MobileNav