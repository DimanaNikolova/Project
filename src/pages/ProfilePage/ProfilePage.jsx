import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import './ProfilePage.css'
import UserContext from '../../utils/UserContext'
import Column from '../../Components/Column'

export default class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: [],
            created: [],
            image: {}
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

            if (response.message) {
                return this.setState({ message: response.message })
            }
            this.setState({ created: response.createdBy, liked: response.likedBy })

        } catch (e) {
            console.log(e);
        }

    }

    componentDidMount() {
        this.getData()
    }
    onChange =(e) => {
        this.setState({ image: e.target.files[0] });
        console.log(e.target.files[0] )
    }
    onSubmit =(e) => {
        // const formData = new FormData();
        // formData.append('file', image);
        // formData.append('upload_preset', preset);
        // try {
        //   const res = await axios.post(url, formData);
        //   const imageUrl = res.data.secure_url;
        //   const image = await axios.post('http://localhost:3000/upload', {
        //     imageUrl
        //   });
        //   setLoading(false);
        //   setImage(image.data);
        // } catch (err) {
        //   console.error(err);
        // }
      };
      render() {
          const { liked, created } = this.state
          return (
              <Main>
                  <div className='ProfileContainer'>
                      <img className="ProfilePic" alt="profile" src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png" />
  
                      <h2>{this.context.user.username}</h2>
  
                      <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/>
   
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

