import React from 'react'
import'./ExercisesSection.css'
export const ExercisesSection = () => {
    return (
        <div className='ex-container'>
           
                <h1 className='ex-headline'>Exercises</h1>
            <div className='ex-upper-lower-works-menu'>
                <div className='ex-menu-item1'>
                    <div className='ex-content'>
                        <h1 className='ex-title'>Upper Body Workout</h1>
                    </div>
                </div>
                <div className='ex-menu-item2'>
                    <div className='ex-content'>
                        <h1 className='ex-title'>Lower Body Workout</h1>
                    </div>
                </div>
            </div>
           
        </div>
    )
}



export default ExercisesSection
