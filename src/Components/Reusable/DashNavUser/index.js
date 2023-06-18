import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Logo.png'
import dog from '../../../Assets/dog.png'
import Browse from '../../../Assets/browse.png'
import PetShop from '../../../Assets/pet-shop.png'
import adopt from '../../../Assets/animal-rights.png'
import './style.css'

const DashNavUser = () => {
  return (
    <div className='DashNavUserWrapper'>
      <div>
        <Link className='DhashNavLink logo' to="/">
          <img className='DhashNavLogo' src={Logo} />
        </Link>
        <Link to="/browse" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={Browse} /> */}
          <p>Buy Pups</p>
        </Link>
        <Link to="/browse" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={PetShop}/> */}
          <p>Shop</p>
        </Link>
        <Link to="/mating" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={dog}/> */}
          <p>Mating</p>
        </Link>
        <Link to="/adopt" className='DhashNavLink'>
          {/* <img className='DashNavIcon' src={adopt}/> */}
          <p>Adopt</p>
        </Link>
      </div>
      <div>
        <Link to="/seller" className='DhashNavLink' style={{textAlign:"center"}}>
            <p>Sell with us</p>
        </Link>
      </div>
    </div>
  )
}

export default DashNavUser