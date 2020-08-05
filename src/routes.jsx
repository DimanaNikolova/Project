import React, {Component} from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";
import GuestPage from './pages/GuestPage/GuestPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import PartnersPage from './pages/Partners/PartnersPage'
import ErrorPage from './pages/404/404'
import CreateArticlePage from './pages/CreateArticlePage/CreateArticlePage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'



class Routes extends Component {

    render(){
        return <Router>
        <Switch>
        <Route exact path='/' component={GuestPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contacts' component={ContactsPage} />
        <Route path='/partners' component={PartnersPage} />
        <Route path='/create-article' component={CreateArticlePage} />
        <Route path='/all' component={ArticlesPage} />
        <Route  component={ErrorPage} />

        </Switch>
        </Router>
    }
}

export default Routes
