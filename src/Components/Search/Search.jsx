import React, { Component } from 'react'
import './Search.css'

const Search = ({onSearchChange,onSearchClick}) => {
    return (
        <div className="searchBox">
        <input className="searchInput" type="text" name="" placeholder="Search"  onChange={onSearchChange}/>
        <button className="searchButton" onClick={onSearchClick}>
            <i className="material-icons">
                Find
           </i>
        </button>
    </div>
    )
}
export default Search

