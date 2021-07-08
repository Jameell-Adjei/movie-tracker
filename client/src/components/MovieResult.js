import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
const MovieResult = ({ image, title, release, desc, id}) => {
        let navigate = useNavigate()

        const clicked = ()=>{
           navigate(`/movie/${id}`);
        }
        return (
            <div className='movie-item'>
                {image == null ?( <img src='../images/No_Picture.jpg' alt={'Image for ' + title}  onClick={clicked} className='temp-class'  srcSet=""/> 
                ):(
                <img src={'https://image.tmdb.org/t/p/w342' + image} alt={'Image for ' + title}  onClick={clicked}    srcSet=""/>)}
    
                <div>
                    <h3 className='movie-item__title'>{title}</h3> 
                    <p className='movie-item__desc'>{desc}</p>
                    <h6 className='movie-item__release'>{release}</h6>                    
                </div>
            </div>
        )
       

    

}
MovieResult.propTypes = {
   //title : PropTypes.string.isRequired,
}
export default MovieResult


