import React from 'react'
import'./ContactSection.css'
export const ContactSection = () => {
    return (
        <div className='contact-container tc'>
            <div className='contact-textbox tc'>
                <h1 className='contact-headline'>Contact</h1>
                <div className='contact-intro '>
                    <p className='contact-text ' >
                    How can we help? Ask the experts! 
                    Hours of Operation: 9AM to 5PM, 
                    Headquarters: 888.123.1123
                    Local Store: 800-496-7687 or sales@nyfc.com
                    Service Department: 800 NYFC FIXX or service@gnyfc.com</p>
                </div>
            </div>
        </div>
    )
}



export default ContactSection
