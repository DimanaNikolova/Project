import React from 'react'
import Main from '../../Components/Main/Main'
import { Helmet } from 'react-helmet'
import './ArticlesPage.css'
import { Link } from 'react-router-dom'
import Sorting from '../../Components/Sorting/Sorting'
import Spinner from '../../Components/Spinner/Spinner'
import Pagination from '../../Components/Pagination/Pagination'

export class ArticlesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            criteria: '',
            categoryCriteria: '',
            loading: true,
            searched: '',
            clicked: false,
            currentPage: 1,
            postsPerPage: 5
        }
    }

    getArticles() {
        fetch(`http://localhost:9999/article/all`)
            .then(res => {
                return res.json()
            }).then(articles => {
                this.setState({ articles, loading: false })
            })
    }

    componentDidMount() {
        this.getArticles()
    }

    renderArticles() {
        let { articles, criteria, categoryCriteria, searched, clicked, currentPage, postsPerPage } = this.state
        if (criteria) {
            articles = [...articles].sort((a, b) => b[criteria].length - a[criteria].length);
        }
        if (categoryCriteria && categoryCriteria !== 'all') {
            articles = [...articles].filter((a) => a.category === categoryCriteria);
        }
        if (searched && clicked) {
            articles = [...articles].filter((a) => a.title.includes(searched));
        }
        if (articles.length > 0) {
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

            return currentPosts.map((article, index) => {
                return (
                    <div className="Article" key={index}>
                        <div className='product-details'>
                            <h1><b>{article.title}</b></h1>
                            <small><b>Category: </b> {article.category} <b>Likes: </b> {article.likedBy.length}</small>
                            <p key={article._id} className="content">
                                {article.content.slice(0, 300) + '...'}
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
        } else {
            return <h3>No articles yet</h3>
        }

    }
    handleChange = (e, type) => {
        const newState = {}
        newState[type] = e.target.value
        this.setState(newState)
    }

    render() {
        const { loading, clicked, postsPerPage, articles } = this.state

        return <Main>
            <Helmet><title>ART-icles</title></Helmet>
            {loading ? <Spinner /> : <div className="Articles" >
                <h1 >ART-icles</h1>
                <Sorting
                    onChange={(e) => this.handleChange(e, 'criteria')}
                    onCategoryChange={(e) => this.handleChange(e, 'categoryCriteria')}
                    onSearchChange={(e) => this.handleChange(e, 'searched')}
                    onSearchClick={(e) => { this.setState({ clicked: !clicked }) }}
                />
                {this.renderArticles()}
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={articles.length}
                    paginate={ pageNumber => this.setState({currentPage: pageNumber})}
                />
            </div>
            }
        </Main>
    }
}

export default ArticlesPage

