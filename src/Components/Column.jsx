import React from 'react'
import {Link} from 'react-router-dom'


const Column = ({ type }) => {
    return (
        <div className="column">
            {type.map((article, index) => {
                return (
                    <Link to={`/article/${article._id}`} className="ProfileLink">
                        <div className='ProfileLinkDiv' key={index}>{article.title}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Column