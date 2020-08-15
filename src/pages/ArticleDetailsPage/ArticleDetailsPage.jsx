import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import { Helmet } from 'react-helmet'
import './ArticleDetailsPage.css'
import CurrentArticle from '../../Components/CurrentArticle/CurrentArticle'

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
                <CurrentArticle
                title={currentArticle.title}
                img={currentArticle.image}
                category={currentArticle.category}
                author={author.username}
                likes={likes}
                content={currentArticle.content}
                />
            </Main>
        )
    }
}
