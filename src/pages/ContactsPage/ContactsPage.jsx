import React, { Component } from 'react'
import Input from '../../Components/Input'
import { Helmet } from 'react-helmet'
import './ContactsPage.css'
import Main from '../../Components/Main/Main'
import SimpleMap from '../../Components/Map/Map'

export default class ContactsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            message: '',
            email: ''
        }
    }

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    render() {
        const { name, message, email} = this.state
        return (
            <Main>
                <div className='Meet'>
                    <Helmet>
                        <title>Contact us</title>
                    </Helmet>

                    <div className='MeetUs'>
                        <h2>Contact us</h2>
                        <p className='contact-infos'>
                            <b>Mobile:</b> 000 000 0000
                            <br/>
                            <b>Email:</b> tovaeemail@gmail.com
                            <br/>
                            <b>Adress: </b> ul. Neshto si tam, kv. Kvartal, 9000, Varna, Bulgaria

                        </p>

                    <h2>Find us at:</h2>
                    </div>
                    <SimpleMap />
                    <div className="MessageContainer">
                        <h3>Send us an email!</h3>
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
                            <button type="submit">Submit</button>
                        </form>
                    </div>            </div>
            </Main>
        )
    }
}
