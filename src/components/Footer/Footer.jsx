import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                
                <p>Indulge in a delightful culinary experience at our restaurant, where every dish is crafted with the freshest ingredients and a touch of love. Savor the rich flavors and exquisite presentation that make each meal a memorable journey for your taste buds.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>

            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 758057632</li>
                    <li>pachini892@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Food.com - All Right Reserved. </p>
      
    </div>
  )
}

export default Footer
