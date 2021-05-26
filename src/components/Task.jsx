import React from 'react';

const Task = (props) =>{
    const {taskText, index} = props 
    return(
        <div>
            <p>({index + 1})-{taskText}</p>
        </div>
    )
}
 export default Task