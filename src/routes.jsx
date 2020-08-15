import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from './utils/UserContext'
import GuestPage from './pages/GuestPage/GuestPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import PartnersPage from './pages/Partners/PartnersPage'
import ErrorPage from './pages/404/404'
import CreateArticlePage from './pages/CreateArticlePage/CreateArticlePage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import ArticleDetailsPage from './pages/ArticleDetailsPage/ArticleDetailsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

class Routes extends Component {
    static contextType = UserContext
    render() {
        const user = this.context.user
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={user ? ArticlesPage : GuestPage}/>
                <Route path="/guest" component={user ? ArticlesPage : GuestPage}/>
                <Route path="/login" component={!user ? LoginPage : ArticlesPage}/>
                <Route path="/register" component={user ? ArticlesPage : RegisterPage}/>
                <Route path="/all" component={user ? ArticlesPage : LoginPage}/>
                <Route path="/article/:id" component={user ? ArticleDetailsPage : LoginPage}/>
                <Route path="/profile/:id" component={user ? ProfilePage : LoginPage}/>
                <Route path="/create-article" component={user ? CreateArticlePage : LoginPage}/>
                <Route path='/contacts' component={ContactsPage} />
                <Route path='/partners' component={PartnersPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    }
}

export default Routes