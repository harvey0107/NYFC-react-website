import React from 'react'
import'./ListOfLower.css'
import EveryLowerItem from './EveryLowerItem'

const ListOfLower = ({title, workouts}) => (
   <div className='lower-list'>
       <h1 className='lower-title'>{title.toUpperCase()}</h1>
        <div className='lower-work-each'>
            {
                workouts.map(({ id, ...otherworkoutprops })=>(
                    <EveryLowerItem key={ id } { ...otherworkoutprops } />
                ))}
        </div>
   </div>

)












export default ListOfLower