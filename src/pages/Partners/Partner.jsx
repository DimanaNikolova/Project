import React from 'react'

const Partner = ({image, name, src}) => {
    return <div className='partner-links'>
        <a href={src}>
        <img src={image} alt='partner'/>
        <h4>{name}</h4>
        </a>
        <br />
        <br />

    </div>
}

export default Partner