import React from 'react'
import {Link} from 'react-router-dom'


const Column = ({ type }) => {
    return (
        <div className="column">
            {type.map((article, index) => {
                return (
                    <Link to={`/article/${article._id}`} key={article.title} className="ProfileLink">
                        <div className='ProfileLinkDiv'>{article.title}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Column