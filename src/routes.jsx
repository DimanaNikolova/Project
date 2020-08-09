import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserContext from './utils/UserContext'
import GuestPage from './pages/GuestPage/GuestPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import PartnersPage from './pages/Partners/PartnersPage'
import ErrorPage from './pages/404/404'
import CreateArticlePage from './pages/CreateArticlePage/CreateArticlePage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage'


class Routes extends Component {
    static contextType = UserContext
    render() {
        const user = this.context.user
        return <BrowserRouter>
            <Switch>
                <Route path="/guest">
                    {!user ? (<GuestPage />) : (<Redirect to="/all" />)}
                </Route>
                <Route exact path="/">
                    {user ? (<ArticlesPage />) : (<Redirect to="/guest" />)}
                </Route>
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contacts' component={ContactsPage} />
                <Route path='/partners' component={PartnersPage} />
                <Route path='/create-article' component={CreateArticlePage} />
                <Route path='/all' component={ArticlesPage} />
                <Route path='/article/:id' component={ArticleDetailsPage} />

                <Route component={ErrorPage} />

            </Switch>
        </BrowserRouter>
    }
}

export default Routes
