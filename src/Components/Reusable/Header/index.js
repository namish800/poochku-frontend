import logo from '../../../Assets/Logo.png'
import { Link } from "react-router-dom";
import './style.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const fName = localStorage.getItem('fName');
  const userRole = localStorage.getItem("role")
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <>
      <div className='headerWrapper'>
          <div>
              <img className='headerLogo' src={logo} />
              <Link className='navLink' to="/browse">Browse Pups</Link>
              <Link className='navLink' to="/shop">Shop</Link>
              <Link className='navLink' to="/mating">Mating</Link>
              <Link className='navLink' to="/adopt">Adopt</Link>
              <Link className='navLink' to="/services">Services</Link>
              <Link className='navLink sellerLink' to="/sellerdashboard">Seller Account</Link>
          </div>
          <div className='userActions'>
            {/* {fName && <p>Welcome {fName}</p>} */}
            {fName && <Link className='navLink' to="/useraccount">Welcome {fName}</Link>}
            {!fName ? <Link className='navLink login' to={{
              pathname: "/auth",
              state: { prevPath: location.pathname }
              }}>Login/SignUp</Link> : <Link className='navLink' onClick={handleLogout} to="/auth">Logout</Link>}
          </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="mobileHeader">
        <Container>
          <Navbar.Brand href="#home"><img className='headerLogo' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/browse">Browse Pups</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/mating">Mating</Nav.Link>
              <Nav.Link href="/adopt">Adopt</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href={!userRole ? "/auth" : userRole && userRole === "seller" ? "/sellerdashboard" : "sellerregister" }>Seller Account</Nav.Link>
              <Nav.Link href="/auth">Login/SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header