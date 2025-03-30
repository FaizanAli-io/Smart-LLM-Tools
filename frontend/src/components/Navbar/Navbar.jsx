
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import './Navbar.css';

export default function Navbar() {
  return (
    <MDBNavbar fixed='top' light style={{
      backgroundColor: "#f5f5f5", /* Greyish Background */
      padding: "12px 0",
      borderBottom: "1px solid #ddd"
    }}>
      <MDBContainer fluid className='header-navbar' style={{
        display: "flex",
        justifyContent: "center",  /* Center content horizontally */
        alignItems: "center",      /* Center content vertically */
      }}>
        <MDBNavbarBrand href='#' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", /* Make it span full width */
          textAlign: "center"
        }}>
          <img
            src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
            height='30'
            alt='Logo'
            loading='lazy'
          />
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}
