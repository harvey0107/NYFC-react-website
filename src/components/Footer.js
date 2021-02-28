import React from 'react'
import { Button } from 'antd';
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            {/* content */}
            <div className='footer-container-content'>
                <div className='footer-intro-section'>
                    <p>
                        We work hard to maintain the values that we established in 1973, when we were just a small chain of squash clubs. 
                        We’re consistently improving our offerings and services, and pride ourselves on creating connections with our members 
                        and delivering the most personalized fitness experiences possible.
                    </p>
                </div>
                <div className='footer-icon-section'>
                    <p calssName='footer-contact'>Follow Us</p>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter-square"></i>
                    <p calssName='footer-number'>1-212-123-4567</p>
                    
                </div>
                <section className='footer-freetrial-section'>
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

            {/* copyright */}
            <p className='footer-copyright'>Copyright © 2021 by NYFC, Inc.</p>
        </div>
    )
}

export default Footer
