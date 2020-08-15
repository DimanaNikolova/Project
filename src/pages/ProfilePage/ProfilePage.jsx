import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import './ProfilePage.css'
import UserContext from '../../utils/UserContext'
import Column from '../../Components/Column'
import { Helmet } from 'react-helmet'
import profilePic from '../../images/ProfilePicture.png'

export default class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: [],
            created: [],
        }
    }
    static contextType = UserContext

    getData = async () => {
        let currentUser = window.location.href.split('/')[4]
        try {
            const promise = await fetch(`http://localhost:9999/user/profile/${currentUser}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json()
            this.setState({ created: response.createdBy, liked: response.likedBy })

        } catch (e) {
            console.log(e);
        }

    }

    componentDidMount() {
        this.getData()
    }
  
      render() {
          const { liked, created } = this.state
          return (
              <Main>
                  <Helmet><title>Profile</title></Helmet>
                  <div className='ProfileContainer'>
                      <img className="ProfilePic" alt="profile" src={profilePic} />
                      <h2>{this.context.user.username}</h2>
                      <div className="row">
                          <h4 className="head">Liked articles:</h4>
                          <h4 className="head">Created articles:</h4>
                      </div>
                      <div className="row">
                          <Column type={liked} />
                          <Column type={created} />
                      </div>
                  </div>
              </Main>
          )
      }
    }

