import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../images/HeaderLogo/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = async () =>{
    await signOut(auth)
  }
  return (
    <div className='header-bootstrap'>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='ml-0' as={Link} to="/home">
            <img width={130} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-dark">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/details">Details</Nav.Link>
            </Nav>
            <Nav>
              {user ?
                <Nav.Link onClick={() => handleLogOut()} as={Link} to="/login">Log out</Nav.Link> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              <Nav.Link as={Link} to="/register">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;