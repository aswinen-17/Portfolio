import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-top">
    <img src={logo} alt='' />
    
    <div className="footer-icons">
      <i className="ri-github-fill"></i>
      <i className="ri-linkedin-box-fill"></i>
      <i className="ri-mail-fill"></i>
      <i className="ri-phone-fill"></i>
    </div>
  </div>

  <div className="footer-bottom">
    © 2025 Aswin E N — All rights reserved.
  </div>
</footer>
  )
}

export default Footer
