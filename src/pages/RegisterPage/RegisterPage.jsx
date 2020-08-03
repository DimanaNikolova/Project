import React from 'react'
import '../LoginPage/LoginPage.css'
import Main from '../../Components/Main/Main'
import Input from '../../Components/Input'
import { Helmet } from 'react-helmet'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            rePassword: ''
        }
    }

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        try {

            const promise = await fetch(`http://localhost:9999/user/register`, {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json()
           

            this.props.history.push('/login')
         
        } catch (e) {
            console.log(e);
        }

    }
    
    render() {
        const { username, password, rePassword } = this.state

        return (
            <Main>
                <Helmet>
                    <title>Register</title>
                </Helmet>
                <div className="Container">
                    <h3>Register</h3>
                    <form className="Form-area" onSubmit={this.handleSubmit}>
                        <Input value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label="Username"
                            id="username" />
                        <Input value={password}
                            type='password'
                            onChange={(e) => this.handleChange(e, 'password')}
                            label="Password"
                            id="password" />
                        <Input value={rePassword}
                            type='password'
                            onChange={(e) => this.handleChange(e, 'rePassword')}
                            label="Repeat Password"
                            id="password" />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </Main>
        )
    }

}

export default RegisterPage