import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Welcome = () => {
  return <div className="container">
    <Helmet><title>ART-icles</title></Helmet>
    <div className="item">
      <h3>The art newspaper</h3>
      <h1>ART-ICLES</h1>
      <p>An online and print publication that covers the international art world and most importantly strives to bring together people who have common interests and love for art to create a kind community</p>
      <Link to="/login" className="btn btn-primary btn-login">Login</Link>
      <Link to="/register" className="btn btn-primary">Register</Link>
    </div>
  </div>
}

export default Welcome