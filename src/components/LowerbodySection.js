import React from 'react'
import LowerData from './LowerData'
import LisOfLower from "./ListOfLower";
import './LowerbodySection.css'


class LowerbodySection extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            collections: LowerData
        } 
    }
    render() { 
        const {collections} =this.state
        return (<div className='lower-workout-page'>
                {
                    collections.map(({ id, ...otherProps}) => (
                        <LisOfLower key={id} {...otherProps} />
                    ))
                }
            </div>)
    }
}

export default LowerbodySection