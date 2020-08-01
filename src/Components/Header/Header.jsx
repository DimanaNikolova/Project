import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return <nav className="menu">
        <ul className="menu__list">
            <li className="menu__group"><Link to="/" className="menu__link">Home</Link></li>
            <li className="menu__group"><Link to="/register" className="menu__link">Register</Link></li>
            <li className="menu__group"><Link to="/login" className="menu__link">Login</Link></li>
        </ul>
    </nav>
}

export default Header