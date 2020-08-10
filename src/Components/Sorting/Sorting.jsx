import React from 'react'

const Sorting = ({onChange, onCategoryChange}) => {
    return (
        <div className='Sorting'>
        <label htmlFor="sortingValue">Sort by: </label>
        <select onChange={onChange} name="sorting" id="Sort">
            <option value="creationDate">Newest</option>
            <option value="likes">Likes</option>
        </select>
        <label htmlFor="sortingValue"> Category: </label>
        <select onChange={onCategoryChange} name="sorting" id="Sort">
            <option value="all" defaultValue>All</option>
            <option value="tips">Tips</option>
            <option value="news">News</option>
            <option value="reviews">Reviews</option>
            <option value="other">Other</option>
        </select>
    </div>
    )
}
export default Sorting
