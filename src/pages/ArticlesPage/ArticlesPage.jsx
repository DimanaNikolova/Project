import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import {Helmet} from 'react-helmet'
import './ArticlesPage.css'
import { Link } from 'react-router-dom'


export class ArticlesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    getOrigamis() {
        //const {length} = this.props
        fetch(`http://localhost:9999/article/all`)
            .then(res => {
                return res.json()
            }).then(articles => {
                this.setState({ articles })
            })
    }

    componentDidMount() {
        this.getOrigamis()
    }

    renderOrigamis(){
        const { articles } = this.state

        return articles.map((article, index) => {
            return (
                <div className="Article" key={index}>
                    <div className='product-details'>
                    <h1>{article.title}</h1>
                    <br/>
                    <small className="articleAuthor">Author: {article.articleAuthor ? article.articleAuthor.username : "Nqmaeeeeeee"}</small>
                    <p key={article._id} className="content">
                       {index+1}: {article.content.slice(0,500) + '...'}
                    </p>
                    <Link to={`/article/${article._id}`}>
                        <button className='btn'>Read more</button>
                    </Link>
                    </div>
                    <div>
                    <span>
                    <img src={article.image} alt="articleImage" />
                    </span>
                    </div>
                </div>
            )
        })
    }



    render() {
        return <Main>
            <Helmet><title>Articles</title></Helmet>

        <div className="Articles">
            <h1 >Articles</h1>
            {
                this.renderOrigamis()
            }

        </div>
        </Main>
    }
}

export default ArticlesPage

