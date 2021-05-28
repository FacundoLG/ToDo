import React from 'react';
import '../assets/styles/task.css'
const Task = (props) =>{
    const {taskText, index} = props 
    return(
        <div className="taskContainer">
            <p>({index + 1})-{taskText}</p>
        </div>
    )
}
 export default Task