import React from 'react'
import '../LoginPage/LoginPage.css'
import Main from '../../Components/Main/Main'
import Input from '../../Components/Input'


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

    render() {
        const { username, password, rePassword } = this.state

        return (
            <Main>
                <div className="Container">
                    <h3>Register</h3>
                    <form className="Form-area">
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