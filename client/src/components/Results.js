import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MovieResult from './MovieResult'


const Results = ({ data }) => {

    if(data.search.loading){
        console.log(data.search.loading)
        return <p className='movie-item'>Results are being loaded</p>;

        
    } else if(!data.search.loading) {
        console.log(data.search.data[0].results)
    
        return (
            <div style={userStyle}>
                
                <div>
                  {data.search.data[0].results.map(result =>
                    {  return <MovieResult  title={result.title} desc={result.overview} release={result.release_date} image={result.poster_path}/>})} 
                </div>   
                
            </div>
        );
    }

}
const userStyle = { 
    display : 'grid',
    gridTemplateColumns : 'repeat(3 , 1fr)',
    gridGap : '1rem'
}
const maptoProps = (state) =>{
    return {data : state}
 }      
export default connect(maptoProps, null)(Results)

