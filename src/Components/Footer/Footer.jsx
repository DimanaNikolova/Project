import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return <div className="footer">
        <div id="button"></div>
        <div id="container">
           
            <div id="cont">
                <div className="footer_center">
                    <h5>Copyright © 2020 by Dimana Nikolova</h5>
            <div className='links'>
                <li className="footerLink"><Link to="/partners">Partners</Link></li>
                <li className="footerLink"><Link to="/about">About us</Link></li>
                <li className="footerLink"><Link to="/contacts">Contacts</Link></li>
            </div>
                </div>
            </div>
          
        </div>
    </div>


}

export default Footer