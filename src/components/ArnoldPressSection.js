import React from 'react'
import'./ArnoldPressSection.css'
import ReactPlayer from "react-player"
export const ArnoldPressSection = () => {
    return (
        <div className='arnold-container'>
            <div className='arnold-textbox'>
                <h1 className='arnold-headline'>ArnoldPress</h1>
                
                <div className='arnold-intro'>
                    <ol className='arnold-text'>
                        <li>Using a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place. Once the dumbbells are in place, rotate your palms so they are facing you.</li>
                        <li>Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.</li>
                        <li>As you press, rotate the dumbbells until your palms are facing forward.</li>
                        <li>Slowly lower the dumbbells back to the starting position.</li>
                    </ol>
                </div>
            </div>
            <div className='arnold-wrapper'>
                <ReactPlayer 
                className='react-player'
                width='100%'
                height='100%'
                url="https://www.youtube.com/watch?v=hmnZKRpYaV8&feature=emb_title"/>
            </div>
        </div>
    )
}



export default ArnoldPressSection

