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
                        <li>Lie flat on your back on a bench.</li>
                        <li>Grip the bar with hands just wider than shoulder-width apart, 
                            so when you’re at the bottom of your move your hands are directly above your elbows.</li>
                        <li>Bring the bar slowly down to your chest as you breathe in.</li>
                        <li>Push up as you breathe out, gripping the bar hard and watching a spot on the ceiling rather than the bar, 
                            so you can ensure it travels the same path every time.</li>
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

