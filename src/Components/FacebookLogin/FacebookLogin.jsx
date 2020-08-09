import React from 'react';
import FacebookLogin from 'react-facebook-login';



const Login = () => {
    return <FacebookLogin
    appId="370043110822231"
    autoLoad={true}
    fields="name,email,picture"
  />
}

export default Login