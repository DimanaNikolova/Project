import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import { Helmet } from 'react-helmet'
import './ArticlesPage.css'
import { Link } from 'react-router-dom'


export class ArticlesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            criteria: ''
        }
    }

    getOrigamis() {
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


    renderOrigamis() {
        const { articles, criteria } = this.state
        const sorted = [...articles].sort((a, b) => b[criteria] - a[criteria]);


        return sorted.map((article, index) => {
            return (
                <div className="Article" key={index}>
                    <div className='product-details'>
                        <h1>{article.title}</h1>
                        <br />
                        <small className="articleAuthor">Category: {article.category} Likes: {article.likes ? article.likes : 0}</small>
                        <p key={article._id} className="content">
                            {index + 1}: {article.content.slice(0, 500) + '...'}
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
    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)

    }



    render() {
        return <Main>
            <Helmet><title>Articles</title></Helmet>
            <div className="Articles">
                <h1 >Articles</h1>
                <div className='Sorting'>
                    <label htmlFor="sortingValue">Sort by: </label>

                    <select onChange={(e) => this.handleChange(e, 'criteria')} name="sorting" id="Sort">
                        <option value="category">Category</option>
                        <option value="creationDate">Newest</option>
                        <option value="likes">Likes</option>
                    </select>
                </div>
                {
                    this.renderOrigamis()
                }
            </div>
        </Main>
    }
}

export default ArticlesPage

