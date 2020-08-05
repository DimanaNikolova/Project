import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import UserContext from '../../utils/UserContext'

const Header = () => {
    const context = useContext(UserContext)
    return <nav className="menu">
        {context.user ?
            <ul className="menu__list">
                <li className="menu__group"><Link to="/" className="menu__link">Home</Link></li>
                <li className="menu__group"><Link to="/create-article" className="menu__link">Create</Link></li>
                <li className="menu__group"><Link to="/all" className="menu__link">All</Link></li>


            </ul>
            : <ul className="menu__list">
                <li className="menu__group"><Link to="/" className="menu__link">Home</Link></li>
                <li className="menu__group"><Link to="/register" className="menu__link">Register</Link></li>
                <li className="menu__group"><Link to="/login" className="menu__link">Login</Link></li>
            </ul>}

    </nav>
}

export default Header