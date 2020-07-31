import React from 'react'
import './Header.css'

const Header = () => {
    return <nav class="menu">
        <ul class="menu__list">
            <li class="menu__group"><a href="#0" class="menu__link">Home</a></li>
            <li class="menu__group"><a href="#0" class="menu__link">Register</a></li>
            <li class="menu__group"><a href="#0" class="menu__link">Login</a></li>
        </ul>
    </nav>
}

export default Header