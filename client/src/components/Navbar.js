import React , { Fragment }from 'react'
import PropTypes from 'prop-types';
import  { Link }from "react-router-dom";
import Searchbar from './Searchbar'
import { authSelector, logOut  } from '../reducers/auth/authSlice'
import { useSelector , useDispatch } from 'react-redux';

const Navbar = ({ icon }) => {

    const dispatch = useDispatch();
    const { authenticated, user  } = useSelector(authSelector);

    const onLogOut = () =>{
        dispatch(logOut());
    }

    const userLinks = (
    <Fragment> 
       <Searchbar/>
       <p>Hello { user && user.name }</p> 
       <a onClick = { onLogOut } href="#!">Logout</a>
       <Link to="/home">Home</Link>
    </Fragment>)


    const guestLinks = (
    <Fragment> 
        <Link to="/register">Register</Link>
        <Link to="/login" >
            <button className='navbar__items--cta'> 
                Login
            </button>
        </Link>
    </Fragment>)

    return (
        <nav className="main-nav">
            <a href="/" className='main-nav__navtext'>MovieTracker</a>
           
            <ul className='main-nav__items'>
                {authenticated ? userLinks : guestLinks}
            </ul>
                
            
        </nav>
    )
}

export default Navbar 
