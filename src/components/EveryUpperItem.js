import React from "react";
import './EveryUpperItem.css';

const EveryUpperItem = ({id, name, imageUrl}) => (
    <div className='upper-item'>
        <div className ='image' 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}></div>
            <div className='upper-footer'></div>
            <span className='name'>{name}</span>
            
    </div>
)

export default EveryUpperItem