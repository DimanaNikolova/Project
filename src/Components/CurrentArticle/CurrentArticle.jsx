import React from 'react'
import LikeBtn from '../LikeBtn/LikeBtn'

const CurrentArticle = ({title, img, category, author, likes, content}) => {
    return (
        <div className='CurrentArticle'>
        {<LikeBtn />}
        <h1>{title} </h1>
        <img src={img} alt='article' />
        <p className="articleInfo"><b>Category: </b>{category} <b>Author: </b>{author} <b>Likes: {likes}</b></p>
        <p className='DetailsContent'>{content}</p>
    </div>
    )
}
export default CurrentArticle