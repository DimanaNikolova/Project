// import React, { useState, useEffect } from 'react'
// import UserContext from './utils/UserContext'

// const App = (props) => {

//   const [user, setUser] = useState(props.user ? {
//     ...props.user,
//     loggedIn: true
//   } : null)
//   const articles = props.articles || []
  
//   const logIn = (userObject) => {
//     setUser({
//       ...userObject,
//       loggedIn: true
//     })
//   }

//   const logOut = () => {
//     document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
//     setUser({
//       loggedIn: false
//     })
//   }
  
//   console.log('user', user)

//   return (
//     <UserContext.Provider value={{
//       user,
//       logIn,
//       logOut,
//       articles
//     }}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }

// export default App
import React, { Component } from 'react'
import UserContext from './utils/UserContext'

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loggedIn: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }
    logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        this.setState({
            loggedIn: false,
            user: null
        })
    }
    componentDidMount(){
        const token = getCookie('x-auth-token')

        if (!token){
            this.logOut()
            return
        }
        fetch('http://localhost:9999/user/verify', {
            method: 'POST',
            body: JSON.stringify({
              token
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(promise => {
            return promise.json()
          }).then(data=>{
            if (data.status){
                this.logIn({
                    username: data.user.username,
                    userId: data.user._id,
                })
            } else{
                this.logOut()
            }
        })
    }
  
    render() {
        const {loggedIn, user} = this.state
        
        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
                }}>
                { this.props.children}
            </UserContext.Provider>
        )
    }
}
