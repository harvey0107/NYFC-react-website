import React from 'react'
import'./ExercisesSection.css'
import ExUpLowWorksMenu from './ExUpLowWorksMenu'
import {Link} from 'react-router-dom'
export const ExercisesSection = () => {
    return (
        <div className='ex-container'>
             <h1 className='ex-headline'>Exercises</h1>
           <ExUpLowWorksMenu />
            <Link to='/upper'>
           <button className='ex-button'>Enter Upper</button>
           </Link>
           <Link to='/lower'> 
            <button className='ex-button'>Enter Lower</button>
            </Link>       
        </div>
    )
}



export default ExercisesSection
