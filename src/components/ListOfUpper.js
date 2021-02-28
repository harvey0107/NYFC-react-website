import React from "react";
import EveryUpperItem from "./EveryUpperItem";

import './ListOfUpper.css';

const ListOfUpper = ({ title, workouts }) =>(
    <div className='upper-list'>
        
        <h1 className='upper-title'>{title.toUpperCase()}</h1>
        <div className='upper-work-each'>
            
            {
                workouts.map(({ id, ...otherworkoutprops })=>(
                    <EveryUpperItem key={id} { ...otherworkoutprops } />
                ))}
        </div>
    </div>
)

export default ListOfUpper