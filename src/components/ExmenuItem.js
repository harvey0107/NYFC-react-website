import React from 'react'
import './ExmenuItem.css'


const ExmenuItem =({ title , imgUrl, linkUrl}) =>(

    <div style={{
        backgroundImage: `url(${imgUrl})`
    }}className='ex-menu-item'>
       <div className='ex-content'>
         <h1 className='ex-title'>{title}</h1>
        </div>
    </div>
)

export default ExmenuItem