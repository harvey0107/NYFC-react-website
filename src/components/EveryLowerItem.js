import React from "react";
import './EveryLowerItem.css';

const EveryLowerItem = ({id, name, imageUrl}) => (
    <div className='lower-item'>
        <div className ='image' 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}></div>
            <div className='lower-footer'></div>
            <span className='name'>{name}</span>
            
    </div>
)

export default EveryLowerItem