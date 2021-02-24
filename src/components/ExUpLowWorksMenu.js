import React from "react";
import ExmenuItem from './ExmenuItem'
import './ExUpLowWorksMenu.css'

class ExUpLowWorksMenu extends React.Component {
    constructor(){
        super()

        this.state = {
            sections: [{
                title:'Upper Body Workout',
                imgUrl:'https://static01.nyt.com/images/2017/03/13/well/move/NYT_Strength-training_Bodyweight-Squat_Christine_Final/NYT_Strength-training_Bodyweight-Squat_Christine_Final-blog480-v2.jpg',
                id: 1
            },
            {
             title:'Lower Body Workout',
             imgUrl:'https://static01.nyt.com/images/2017/03/13/well/move/NYT_StrengthTraining_Mountain-Climbers_Christine_Final/NYT_StrengthTraining_Mountain-Climbers_Christine_Final-blog480-v2.jpg',
             id: 2   
            }]
        } 
    }
    render(){
        return (
            <div className='ex-upper-lower-works-menu'>
                {
                this.state.sections.map(({title , imgUrl , id}) => (
                    <ExmenuItem key = {id} title = {title} imgUrl={imgUrl}/>
                ))
                }       
            </div>
        )
    }
}

export default ExUpLowWorksMenu