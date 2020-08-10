import React, { Component } from 'react'
import './LikeBtn.css'
import UserContext from '../../utils/UserContext'
import ErrorMessage from '../../Components/ErrorMessage/Error'

export default class LikeBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alreadyLiked: false,
            message: ''
        }
    }
    static contextType = UserContext
    onSubmit = async (event) => {
        event.preventDefault()

        let currentArticleId = window.location.href.split('/')[4]

        try {
            const promise = await fetch(`http://localhost:9999/article/like/${currentArticleId}`, {
                method: "POST",
                body: JSON.stringify({
                    currentArticleId,
                    currentUserId: this.context.user.userId
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const response = await promise.json()

            if (response.message) {
                return this.setState({ message: response.message })
            }
            this.setState({ alreadyLiked: true })


        } catch (e) {
            console.log(e);
        }

    }

    render() {
        const { alreadyLiked, message } = this.state
        return (
            <div>
                <button onClick={e => this.onSubmit(e)} className={!alreadyLiked ? 'likeBtn' : null}>❤</button>
                <div>{message ? alert(message) : null}</div>
            </div>
        )
    }
}
