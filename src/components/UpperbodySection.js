import React from 'react'
import UpperData from './UpperData'

class UpperbodySection extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            collections: UpperData
        } 
    }
    render() { 
        return (
            <div>Upper Body Workout</div>
        )
    }
}

export default UpperbodySection