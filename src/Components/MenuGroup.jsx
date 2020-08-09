import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const MenuGroup = ({ path, onClick, name }) => {
    return (
        <li className="menu__group" onClick={onClick}>
            <Link
                to={path}
                className="menu__link">
                    {name}
            </Link>
        </li>
    )
}

export default MenuGroup