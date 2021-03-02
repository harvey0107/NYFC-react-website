import React from 'react'
import'./ExercisesSection.css'
import ExUpLowWorksMenu from './ExUpLowWorksMenu'
export const ExercisesSection = () => {
    return (
        <div className='ex-container'>
             <h1 className='ex-headline'>Exercises</h1>
           <ExUpLowWorksMenu />    
        </div>
    )
}



export default ExercisesSection
