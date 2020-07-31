import React, {Component} from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";
import GuestPage from './pages/GuestPage/GuestPage'


class Routes extends React.Component {

    render(){
        return <BrowserRouter>
        <Switch>
        <Route exact path='/' component={GuestPage} />
        </Switch>
        </BrowserRouter>
    }
}

export default Routes
