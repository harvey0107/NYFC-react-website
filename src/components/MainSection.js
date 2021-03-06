import React from 'react'
import './MainSection.css'
import { Button } from 'antd';
import {Link} from 'react-router-dom'
export const MainSection = () => {
    return (
        <div className='main-container'>
            <video className='main-video' 
            src='https://assets.mixkit.co/videos/preview/mixkit-man-exercising-with-the-barbell-at-the-gym-23457-large.mp4' 
            autoPlay loop muted></video>
            <div className='main-textbox'>
                <div>
                    <h1 className='main-headline'>Train Insane or Remain the Same</h1>
                    <div className='main-line' />
                </div>
                <div>
                    <p className='main-intro'>We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. We’re consistently improving our offerings and services, and pride ourselves on creating connections with our members and delivering the most personalized fitness experiences possible.</p>
                    <Link to='/aboutus'> 
                    <Button type="primary" className='main-button'>Learn More</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainSection