import React, { Component } from 'react'
import Input from '../../Components/Input'
import { Helmet } from 'react-helmet'
import './ContactsPage.css'
import Main from '../../Components/Main/Main'
import Message from '../../Components/SuccessMessage/Success'
import MeetUs from '../../Components/MeerUs/MeetUs'

export default class ContactsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            message: '',
            email: '',
            success:''
        }
    }

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const {name, message, email} = this.state

        window.emailjs.send('gmail', 'template_SJiX670m', {name, message, email})
        .then(res => {
            this.setState({success: 'Email sent!'})
        }, function(error) {
           console.log('FAILED...', error);
        });
    }
 
    render() {
        const { name, message, email, success } = this.state
        return (
            <Main>
                <div className='Meet'>
                    <Helmet>
                        <title>Contact us</title>
                    </Helmet>
                    <MeetUs/>
                    <div className="MessageContainer">
                        <h3>Send us an email!</h3>
                        {success ? <Message message={success}/> : null}
                        <form className="Message-Form-area">
                            <Input value={name}
                                onChange={(e) => this.handleChange(e, 'name')}
                                label="Name"
                                placeholder='Jon Doe'
                                id="username" />
                            <Input value={email}
                                onChange={(e) => this.handleChange(e, 'email')}
                                label="Email"
                                placeholder='jonDoe@gmail.com'
                                id="email" />
                            <textarea placeholder="Type your message here..." name="message" value={message} onChange={(e) => this.handleChange(e, 'message')}></textarea>
                            <button type="submit" onClick={e =>this.handleSubmit(e)} >Submit</button>
                        </form>
                    </div>
                    </div>
            </Main>
        )
    }
}
