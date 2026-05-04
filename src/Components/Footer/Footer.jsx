import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>

      {/* FOOTER TOP */}
      <div className='footer__top'>

        {/* COLUMN 1 - LOGO AND ABOUT */}
        <div className='footer__col'>
          <div className='footer__logo'>
            <span className='footer__logo--icon'>✈️</span>
            <span className='footer__logo--text'>Luxe Travels</span>
          </div>
          <p className='footer__about'>
            Your trusted luxury travel partner since 2009. 
            We create unforgettable travel experiences 
            across the worlds most beautiful destinations.
          </p>
          {/* SOCIAL ICONS */}
          <div className='footer__socials'>
            <span className='footer__social'>📘</span>
            <span className='footer__social'>📸</span>
            <span className='footer__social'>🐦</span>
            <span className='footer__social'>▶️</span>
          </div>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className='footer__col'>
          <h4 className='footer__col--title'>Quick Links</h4>
          <ul className='footer__links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#destinations'>Destinations</a></li>
            <li><a href='#features'>Why Choose Us</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#newsletter'>Contact Us</a></li>
          </ul>
        </div>

        {/* COLUMN 3 - DESTINATIONS */}
        <div className='footer__col'>
          <h4 className='footer__col--title'>Top Destinations</h4>
          <ul className='footer__links'>
            <li><a href='#destinations'>🏝️ Bali, Indonesia</a></li>
            <li><a href='#destinations'>🗼 Paris, France</a></li>
            <li><a href='#destinations'>🌴 Maldives</a></li>
            <li><a href='#destinations'>🏔️ Swiss Alps</a></li>
            <li><a href='#destinations'>🌆 New York, USA</a></li>
            <li><a href='#destinations'>🏛️ Rome, Italy</a></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div className='footer__col'>
          <h4 className='footer__col--title'>Contact Us</h4>
          <div className='footer__contact'>
            <div className='footer__contact--item'>
              <span>📍</span>
              <p>123 Luxury Lane, Travel City, TC 10001</p>
            </div>
            <div className='footer__contact--item'>
              <span>📞</span>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className='footer__contact--item'>
              <span>📧</span>
              <p>hello@luxetravels.com</p>
            </div>
            <div className='footer__contact--item'>
              <span>🕐</span>
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className='footer__bottom'>
        <p className='footer__copyright'>
          © 2024 Luxe Travels. All Rights Reserved. 
          Made with ❤️ for Travelers Worldwide
        </p>
        <div className='footer__bottom--links'>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Terms of Service</a>
          <a href='/'>Cookie Policy</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer