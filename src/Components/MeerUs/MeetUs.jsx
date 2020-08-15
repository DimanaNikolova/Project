import React from 'react'
import './MeetUs.css'
import SimpleMap from '../Map/Map'

export default function MeetUs() {
    return (
        <div>
            <div className='MeetUs'>
                <h2>Contact us</h2>
                <p className='contact-infos'>
                    <b>Mobile:</b> 000 000 0000
                <br />
                    <b>Email:</b> tovaeemail@gmail.com
                <br />
                    <b>Address: </b> ul. Neshto si tam, kv. Kvartal, 9000, Varna, Bulgaria
            </p>
                <h2>Find us at:</h2>
            </div>
            <SimpleMap/>
        </div>
    )
}
