import React from 'react'
import './MainSection.css'
import { Button } from 'antd';
export const MainSection = () => {
    return (
        <div className='main-container'>
            <div className='main-textbox'>
                <h1 className='main-headline'>Train Insane or Remain the Same</h1>
                <div className='main-line'></div>
                <p className='main-intro'>We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. We’re consistently improving our offerings and services, and pride ourselves on creating connections with our members and delivering the most personalized fitness experiences possible.</p>
                <Button type="primary" className='main-button'>Learn More</Button>
            </div>
        </div>
    )
}

export default MainSection