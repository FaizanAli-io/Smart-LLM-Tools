import React from "react";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter className="footer">
      <MDBContainer className="footer-content">
        <div className="footer-columns">
          {/* Company Info */}
          <div className="footer-section">
            <h6 className="footer-title">
              <MDBIcon icon="gem" className="me-2" />
              Your Company
            </h6>
            <p>Delivering top-notch services with quality and efficiency.</p>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h6 className="footer-title">Products</h6>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Angular</a></li>
              <li><a href="#" className="footer-link">React</a></li>
              <li><a href="#" className="footer-link">Vue</a></li>
              <li><a href="#" className="footer-link">Laravel</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h6 className="footer-title">Useful Links</h6>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Settings</a></li>
              <li><a href="#" className="footer-link">Orders</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h6 className="footer-title">Contact</h6>
            <ul className="footer-contact">
              <li><MDBIcon icon="home" className="me-2" /> New York, NY 10012, US</li>
              <li><MDBIcon icon="envelope" className="me-2" /> info@example.com</li>
              <li><MDBIcon icon="phone" className="me-2" /> +1 234 567 88</li>
              <li><MDBIcon icon="print" className="me-2" /> +1 234 567 89</li>
            </ul>
          </div>
        </div>
      </MDBContainer>

      {/* Copyright Section */}
      <div className="footer-bottom">
        © 2025 Your Company. All rights reserved.
      </div>
    </MDBFooter>
  );
}
