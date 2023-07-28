import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import dog from '../../../Assets/dog.png'
import Browse from '../../../Assets/browse.png'
import PetShop from '../../../Assets/pet-shop.png'
import adopt from '../../../Assets/animal-rights.png'
import './style.css'
import { useEffect } from 'react'

const DashNavUser = () => {
  const location = useLocation();
  useEffect(()=>{
    console.log(location)
  }, [location])
  
  return (
    <div className='DashNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        <div className='linkWrapper'>
          <Link to="/browse" className={location.pathname.includes("browse") ? 'DhashNavLink active' : 'DhashNavLink'}>
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
          <Link to="/adopt" className={location.pathname.includes("adopt") ? 'DhashNavLink active' : 'DhashNavLink'}>
            {/* <img className='DashNavIcon' src={adopt}/> */}
            <p>Adopt</p>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/useraccount" className={location.pathname.includes("useraccount") ? 'DhashNavLink active' : 'DhashNavLink'} style={{textAlign:"center"}}>
            <p>Login/ Sign Up</p>
        </Link>
      </div>
    </div>
  )
}

export default DashNavUser