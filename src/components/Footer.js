import React from 'react'
import { Button } from 'antd';
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <p className='footer-intro'>
                We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. 
                We’re consistently improving our offerings and services, and pride ourselves on creating connections with our members 
                and delivering the most personalized fitness experiences possible.
                </p>
            <section className='footer-freetrial'>
                <p className='footer-free-headline'>
                    Try us out! Enter your email for a free trial.
                </p>
                <div className='input-place'>
                    <form>
                        <input className='footer-input' 
                        type='email' 
                        name='email' 
                        placeholder='Yor Email Here' />
                        <Button type="primary" className='free-button'>Go</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
