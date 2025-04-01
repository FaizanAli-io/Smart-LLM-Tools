import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <MDBNavbar fixed='top' light className="navbar-custom">
      <MDBContainer fluid className='header-navbar'>
        {/* Logo */}
        <MDBNavbarBrand href='/'>
          <img
            src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
            height='30'
            alt='Logo'
            loading='lazy'
          />
        </MDBNavbarBrand>

        {/* Login & Signup Buttons */}
        <div className="nav-buttons">
          <button className="nav-btn login-home-btn" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="nav-btn signup-home-btn" onClick={() => navigate('/signup')}>
            Signup
          </button>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
