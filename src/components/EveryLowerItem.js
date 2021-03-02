import React from "react";
import { Link } from "react-router-dom";
import './EveryLowerItem.css';


const EveryLowerItem = ({name, imageUrl, linkUrl}) => (
    <Link to={linkUrl} style={{ textDecoration: 'none' }}>
    <div className='lower-item'>
        <div className ='image' 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}></div>
            <div className='lower-footer'></div>
            <span className='name'>{name}</span>
            
    </div>
    </Link>
)

export default EveryLowerItem