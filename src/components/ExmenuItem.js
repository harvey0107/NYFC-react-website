import React from 'react'
import { Link } from 'react-router-dom';

import './ExmenuItem.css'


const ExmenuItem =({ title , imgUrl, linkUrl}) =>(
    <>
        {linkUrl ? (
            <Link to={linkUrl}>
                <div style={{
                    backgroundImage: `url(${imgUrl})`
                }}className='ex-menu-item'>
                   <div className='ex-content'>
                     <h1 className='ex-title'>{title}</h1>
                    </div>
                </div>
            </Link>
        ) : (
            <div style={{
                backgroundImage: `url(${imgUrl})`
            }}className='ex-menu-item'>
                <div className='ex-content'>
                    <h1 className='ex-title'>{title}</h1>
                </div>
            </div>
        )}
    </>


)

export default ExmenuItem