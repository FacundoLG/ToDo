import React from 'react';
import { BsXCircle, BsArrowRight} from "react-icons/bs"
import '../assets/styles/task.css'
const Task = (props) =>{
    const {todos,taskText, deleteClick, passClick, isComplete, isImportant} = props 
    var complete = !isComplete
    return(
        <div className={isImportant ? 'taskContainer taskImportant': 'taskContainer'}>
            <div className="left">
                <p>{taskText}</p>
            </div>
            <div className="left">
                <BsXCircle onClick={() => {deleteClick(todos.id)}} className="icon xcircle"/>
                {complete ? <BsArrowRight onClick={() => {passClick(todos.id)}} className="icon arrow"/>:""}
            </div>
        </div>
    )
}
 export default Task