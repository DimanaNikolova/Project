import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import { Helmet } from 'react-helmet'
import './ArticleDetailsPage.css'
import LikeBtn from '../../Components/LikeBtn/LikeBtn'

export default class ArticleDetailsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentArticle: [],
            author: [],
            likes: 0
        }

    }
    componentDidMount() {
        this.getArticle(this.props.match.params.id)
    }

    getArticle = (id) => {
        fetch(`http://localhost:9999/article/details/${id}`)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    this.props.history.push('/error')
                }
                return res.json()
            }).then(({ article, user }) => {
                this.setState({ currentArticle: article, author: user, likes: article.likedBy.length })
            })

    }

    render() {
        const { currentArticle, author, likes } = this.state
        return (
            <Main>
                <Helmet><title>Edin article</title></Helmet>
                <div className='CurrentArticle'>
                    {<LikeBtn />}
                    <h1>{currentArticle.title} </h1>
                    <img src={currentArticle.image} alt='article' />
                    <p className="articleInfo"><b>Category: </b>{currentArticle.category} <b>Author: </b>{author.username} <b>Likes: {likes}</b></p>
                    <p className='DetailsContent'>{currentArticle.content}</p>
                </div>
            </Main>
        )
    }
}
