import React from 'react'
import UpperData from './UpperData'
import LisOfUpper from "./ListOfUpper";
import './UpperbodySection.css'


class UpperbodySection extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            collections: UpperData
        } 
    }
    render() { 
        const {collections} =this.state
        return (<div className='upper-workout-page'>
                {
                    collections.map(({ id, ...otherProps}) => (
                        <LisOfUpper key={id} {...otherProps} />
                    ))
                }
            </div>)
    }
}

export default UpperbodySection