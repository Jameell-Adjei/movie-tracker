import React from 'react';
import { useEffect }from 'react';
import {  loadUser, resetA, authSelector } from  '../../reducers/auth/authSlice'
import { useSelector , useDispatch } from 'react-redux';

const Home = () => {
    const { authenticated } = useSelector(authSelector);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(loadUser())},[])
    useEffect(() => {
       // dispatch(resetA())
        if(authenticated === true ){
            //dispatch(loadUser())
        }
 
     }, [authenticated])
    return (
        <div>
            <h1 style={{color: "#e5e4e2"}}>Not Found</h1>
            <p className='lead' style={{color: "#e5e4e2"}}> The page you are looking for does not exist</p>
        </div>

    )
}

export default Home
