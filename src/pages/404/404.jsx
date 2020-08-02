import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import {Helmet} from 'react-helmet'
import './404.css'
import {Link} from 'react-router-dom'

export default class ErrorPage extends Component {
    render() {
        return (
            <Main >
                <Helmet><title>404</title></Helmet>
                <div className="Main404">
                    <h1>404 :(</h1>
                    <h4>The page you're trying to load is not available</h4>
                    <button><Link className='go-back' to="/" >Go to Home page</Link></button>
                    
                </div>
                
            </Main>
        )
    }
}
