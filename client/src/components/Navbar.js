import React from 'react'
import PropTypes from 'prop-types';
import  { Link }from "react-router-dom";
import Searchbar from './Seachbar'

const Navbar = ({ icon }) => {
    return (
        <nav className="main-nav">
            <a>
                <img src={icon} alt=""/>  
            </a> 
            <div className='main-nav__items'>
                <Searchbar/>
                <ul>
                    
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                   
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar 
