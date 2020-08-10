import React from 'react'
import './Error.css'

const ErrorMessage = ({message}) => {
    return (
        <div className="ErrorMessage">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage