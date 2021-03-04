import React from 'react'
import'./LegPressSection.css'
import ReactPlayer from "react-player"
export const LegPressSection = () => {
    return (
        <div className='leg-container'>
            <div className='leg-textbox'>
                <h1 className='leg-headline'>Leg Press</h1>
                
                <div className='leg-intro'>
                    <ol className='leg-text'>
                        <li>Choose the appropriate weight and set the seat so that the knees are bent just over right angles.</li>
                        <li>Position feet about shoulder width apart.</li>
                        <li>Try to push through your heels, keeping the knees lined up over the toes.</li>
                        <li>Extend the legs until nearly straight, avoiding locking the knees.</li>
                    </ol>
                </div>
            </div>
            <div className='leg-wrapper'>
                <ReactPlayer 
                className='react-player'
                width='100%'
                height='100%'
                url="https://www.youtube.com/watch?v=Gk8cCEQh-CE"/>
            </div>
        </div>
    )
}



export default LegPressSection

