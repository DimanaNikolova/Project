import React, {Component} from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";
import GuestPage from './pages/GuestPage/GuestPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'






class Routes extends Component {

    render(){
        return <Router>
        <Switch>
        <Route exact path='/' component={GuestPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />

        </Switch>
        </Router>
    }
}

export default Routes
