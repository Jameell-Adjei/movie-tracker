
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {grabData , reset } from '../reducers/search/searchSlice';
import { useNavigate } from 'react-router-dom'


const mapDispatch = { grabData , reset  }

const Seachbar = ({ grabData,  reset}) => {
    const navigate = useNavigate()
    const SendData = (event) =>{

        if(event.charCode === 13){
            const searchData = event.target.value;
            
            if(searchData !== ''){
                reset();
                grabData(searchData , 1);
                navigate('/results'); 
            }                                                               
        }
    
        
    } 


    return (
        <Fragment>
            <input type="search" name="" id="" placeholder="Enter movie here ..." onKeyPress={SendData}   className="search-input"/>
        </Fragment>
    )
}



export default connect(null, mapDispatch)(Seachbar)
