import React from 'react'
import './LoginPage.css'
import Main from '../../Components/Main/Main'
import Input from '../../Components/Input'


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }
    
    render(){
    const { username, password } = this.state
  
        return (
            <Main>
               <div className="Container">
                   <h3>Login</h3>
                <form className="Form-area">
                    <Input value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label="Username"
                            id="username"/>
                    <Input  value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label="Password"
                            type='password'
                            id="password"/>
                            <button type="submit">Login</button>
                </form>
               </div>
            </Main>
        )
    }

}

export default LoginPage