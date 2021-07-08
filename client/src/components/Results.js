import { connect } from 'react-redux';
import MovieImage from './MovieImage';

const Results = ({ data }) => {


    if(data.loading){
        console.log(data.loading)
        return null;    
    } else if(!data.loading) {
        console.log(data)
        console.log(data.data[0].results)
    
        return (
            <div>
                <div className='results__container'>
                  {data.data[0].results.map(result =>
                    {  return <MovieImage image={result.poster_path} title={result.title} id={result.id}/>})} 
                </div>   
                
            </div>
        );
    }

}

const maptoProps = (state) =>{
    return {data : state.search}
 }      
export default connect(maptoProps, null)(Results)

