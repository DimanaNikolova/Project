import React, { Component } from 'react'
import './Spinner.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className="col-sm-2">
            <div id="dots5">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        )
    }
}
