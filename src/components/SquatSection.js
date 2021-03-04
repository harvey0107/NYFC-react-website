import React from 'react'
import'./SquatSection.css'
import ReactPlayer from "react-player"
export const SquatSection = () => {
    return (
        <div className='squat-container'>
            <div className='squat-textbox'>
                <h1 className='squat-headline'>Squat</h1>
                
                <div className='squat-intro'>
                    <ol className='squat-text'>
                        <li>Stand with feet a little wider than hip width, toes facing front.</li>
                        <li>Drive your hips back—bending at the knees and ankles and pressing your knees slightly open—as you…</li>
                        <li>Sit into a squat position while still keeping your heels and toes on the ground, chest up and shoulders back.</li>
                        <li>Strive to eventually reach parallel, meaning knees are bent to a 90-degree angle.</li>
                        <li>Return to a standing upright position.</li>
                    </ol>
                </div>
            </div>
            <div className='squat-wrapper'>
                <ReactPlayer 
                className='react-player'
                width='100%'
                height='100%'
                url="https://www.youtube.com/watch?v=bEv6CCg2BC8"/>
            </div>
        </div>
    )
}



export default SquatSection

