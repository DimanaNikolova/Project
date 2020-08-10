import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return <div className="container">
    <div className="item">
      <h3>Uppercase Heading</h3>
      <h1>Main Title Here</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare erat eu semper tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit viverra leo in tempor.</p>
      <Link to="/login" className="btn btn-primary btn-login">Login</Link>
      <Link to="/register" className="btn btn-primary">Register</Link>
    </div>
  </div>
}

export default Welcome