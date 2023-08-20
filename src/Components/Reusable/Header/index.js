import logo from '../../../Assets/Logo.png'
import { Link } from "react-router-dom";
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';

const Header = () => {
  const fName = localStorage.getItem('fName');
  useEffect(()=>{

  },[])
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
          </div>
          <div>
            <Link className='navLink' to="/sellerdashboard">Seller Account</Link>
            {fName && <Link className='navLink' to="/useraccount">Profile</Link>}
            {fName && <p>Welcome {fName}</p>}
            {!fName && <Link className='navLink' to="/auth">Login</Link>}
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
              <Nav.Link href="/sellerdashboard">Seller Account</Nav.Link>
              <Nav.Link href="/auth">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header