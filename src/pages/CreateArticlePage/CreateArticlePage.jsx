import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import Input from '../../Components/Input'
import './CreateArticlePage.css'
import UserContext from '../../utils/UserContext'
import ErrorMessage from '../../Components/ErrorMessage/Error'

export default class CreateArticlePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            image: '',
            category: '',
            message: ''
        }
    }
    static contextType = UserContext

    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { title, content, image, category } = this.state
        const user = this.context.user

        try {

            const promise = await fetch(`http://localhost:9999/article/create`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    content,
                    image,
                    category,
                    user
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const response = await promise.json()

            if (response.message) {
                return this.setState({ message: response.message })
            }

            this.props.history.push('/partners')

        } catch (e) {
            console.log(e);
        }

    }
    render() {
        const { title, content, image, message } = this.state
        return (
            <Main>
                <div className="Add-article">
                    <h3>Add an article</h3>

                    <form className="Article-Form-area" onSubmit={this.handleSubmit}>
                        {message ? <ErrorMessage message={message} /> : null}
                        <Input value={title}
                            onChange={(e) => this.handleChange(e, 'title')}
                            label="Title"
                            placeholder='Title name here'
                            id="title" />
                        <label >Category:</label>

                        <select name="categories" id="categories" onChange={(e) => this.handleChange(e, 'category')}>
                            <option disabled value="volvo">Select a category</option>
                            <option value="news">News</option>
                            <option value="tips">Tips</option>
                            <option value="reviews">Reviews</option>
                            <option value="other">Other</option>

                        </select>
                        <Input value={image}
                            onChange={(e) => this.handleChange(e, 'image')}
                            label="Image"
                            placeholder='Please put a valid link'
                            id="image" />
                        <label >Content:</label>

                        <textarea placeholder="Write the article here..." name="content" value={content} onChange={(e) => this.handleChange(e, 'content')}></textarea>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Main>
        )
    }
}
