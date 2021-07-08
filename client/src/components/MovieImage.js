import { useNavigate } from 'react-router'

const MovieImage = ({ image, id, title }) => {
    let navigate = useNavigate()

    const clicked = ()=>{
       navigate(`/movie/${id}`);
    }

    return (
        <div className='movie-image'>
            {image == null ?( <img src='../images/No_Picture.jpg' alt={'Image for ' + title}  onClick={clicked} className='temp-class'  srcSet=""/> 
                ):(
                <img src={'https://image.tmdb.org/t/p/w185' + image} alt={'Image for ' + title}  onClick={clicked}    srcSet=""/>)} 

                {image == null &&
                    <div className='movie-image__title-banner'>
                        <h3 className='movie-item__image__text'>{title}</h3> 
                    </div>                    
                }
            
        </div>
    )
}

export default MovieImage
