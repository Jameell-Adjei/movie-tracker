import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const MovieResult = ({ image, title, release, desc}) => {
    return (
        <div className='movie-item'>
            <img src={'https://image.tmdb.org/t/p/w185' + image} alt={'Image for ' + title}     srcSet=""/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <h6 >{release}</h6>
        </div>
    )
}
MovieResult.propTypes = {
    title : PropTypes.string.isRequired,
}
export default MovieResult


