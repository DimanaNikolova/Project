import React from 'react'
import './Success.css'

const Success = ({message}) => {
    return (
        <div className="SuccessMessage">
            <p>{message}</p>
        </div>
    )
}

export default Success