import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className='navbar'>

            {/* LOGO */}
            <div className='navbar__logo'>
                <span className='navbar__logo--icon'>✈️</span>
                <span className='navbar__logo--text'>Luxe Travels</span>
            </div>

            {/* NAV LINKS */}
            <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#destinations'>Destinations</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#newsletter'>Contact</a></li>
            </ul>

            {/* BOOK NOW BUTTON */}
            <button className='navbar__btn'>Book Now</button>

            {/* HAMBURGER MENU for Mobile */}
            <div className='navbar__hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    )
}

export default Navbar    