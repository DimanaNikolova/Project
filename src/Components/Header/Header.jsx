import React, { Component } from 'react'
import './Header.css'
import UserContext from '../../utils/UserContext'
import MenuGroup from '../MenuGroup'

export default class Header extends Component {
    static contextType = UserContext
    render() {
        const { user } = this.context
        return <nav className="menu">
        {user ?
            <ul className="menu__list">
                <MenuGroup path='/' name='Home' />
                <MenuGroup path='/create-article' name='Create' />
                <MenuGroup path='/all' name='All' />
                <MenuGroup path='/' name='Logout' onClick={this.context.logOut}/>
            </ul>
            :
            <ul className="menu__list">
                <MenuGroup path='/' name='Home' />
                <MenuGroup path='/register' name='Register' />
                <MenuGroup path='/login' name='Login' />
            </ul>}
    </nav>
    }
}
