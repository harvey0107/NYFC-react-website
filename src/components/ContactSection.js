import React from 'react'
import'./ContactSection.css'
export const ContactSection = () => {
    return (
        <div className='contact-container'>
            <div className='contact-textbox'>
                <h1 className='contact-headline'>Contact</h1>
                <div className='contact-intro'>
                    <ul className='contact-text' >How can we help? Ask the experts!
                    <li className='contact-text-list'>How can we help? Ask the experts!</li> 
                    <li className='contact-text-list'>Hours of Operation: 9AM to 5PM,</li> 
                    <li className='contact-text-list'>Headquarters: 888.123.1123</li>
                    <li className='contact-text-list'>Local Store: 800-496-7687 or sales@nyfc.com</li>
                    <li className='contact-text-list'>Service Department: 800 NYFC FIXX or service@gnyfc.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default ContactSection
