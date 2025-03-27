import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Images/logo_big.png'
import insta_icon from '../Assets/Images/instagram_icon.png'
import pintester from '../Assets/Images/pintester_icon.png'
import whatsapp_icon from '../Assets/Images/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer logo" />
            <p>Everyday Fits</p>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright &copy; 2024, All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer;