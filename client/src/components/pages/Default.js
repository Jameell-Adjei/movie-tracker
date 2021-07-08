import { useNavigate } from "react-router"

const Default = () => {
    let navigate = useNavigate()
    const clicked = ()=>{  
        navigate('/about')
    }
    return (
        <div>
            <div className='default-page__section'>
                <h1 className='default-page__header'>Welcome to MovieTracker</h1>

                <p className='default-page__desc'>A place that keeps it simple and tracks the movies you’ve watched or want to watch</p>
                
                <button className='default-page__button' onClick={clicked}>See More</button>
            </div>
        </div>
    )
}

export default Default
