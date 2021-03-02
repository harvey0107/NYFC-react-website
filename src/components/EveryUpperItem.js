import React from "react";
import { Link } from 'react-router-dom';
import './EveryUpperItem.css';

const EveryUpperItem = ({name, imageUrl, linkUrl}) => (
    <Link to={linkUrl} style={{ textDecoration: 'none' }}>
    <div className='upper-item'>
        <div className ='image' 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}></div>
            <div className='upper-footer'></div>
            <span className='name'>{name}</span>
            
    </div>
    </Link>
)

export default EveryUpperItem