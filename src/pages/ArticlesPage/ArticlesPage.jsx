import React from 'react'
import Main from '../../Components/Main/Main'
import { Helmet } from 'react-helmet'
import './ArticlesPage.css'
import { Link } from 'react-router-dom'
import Sorting from '../../Components/Sorting/Sorting'
import Spinner from '../../Components/Spinner/Spinner'
import Search from '../../Components/Search/Search'

export class ArticlesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            criteria: '',
            categoryCriteria: '',
            loading: true,
            searched: '',
            clicked: false
        }
    }

    getOrigamis() {
        fetch(`http://localhost:9999/article/all`)
            .then(res => {
                return res.json()
            }).then(articles => {
                this.setState({ articles, loading: false })
            })
    }

    componentDidMount() {
        this.getOrigamis()
    }


    renderOrigamis() {
        let { articles, criteria, categoryCriteria, searched, clicked } = this.state
        if (criteria) {
            articles = [...articles].sort((a, b) => b[criteria] - a[criteria]);
        }
        if (categoryCriteria && categoryCriteria !== 'all') {
            articles = [...articles].filter((a) => a.category === categoryCriteria);
        }
        if (searched && clicked) {
            articles = [...articles].filter((a) => a.title.includes(searched) );
        }


        return articles.map((article, index) => {
            return (
                <div className="Article" key={index}>
                    <div className='product-details'>
                        <h1>{article.title}</h1>
                        <br />
                        <small className="articleAuthor">Category: {article.category} Likes: {article.likedBy.length}</small>
                        <p key={article._id} className="content">
                            {index + 1}: {article.content.slice(0, 300) + '...'}
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
        const { loading, clicked } = this.state
        return <Main>
            <Helmet><title>Articles</title></Helmet>
            { loading ? <Spinner /> : <div className="Articles">
                <h1 >Articles </h1>
                <Sorting
                    onChange={(e) => this.handleChange(e, 'criteria')}
                    onCategoryChange={(e) => this.handleChange(e, 'categoryCriteria')}
                    onSearchChange={(e) => this.handleChange(e, 'searched')}
                    onSearchClick={(e)=> {this.setState({clicked: !clicked})}}
                />
                { this.renderOrigamis() }
            </div>
            }
        </Main>
    }
}

export default ArticlesPage

