import React from 'react';
import {BsFillCircleFill, BsXCircle} from "react-icons/bs"
import '../assets/styles/task.css'
const Task = (props) =>{
    const {todos,taskText, deleteClick} = props 
    console.log(todos)
    return(
        <div className="taskContainer">
            <div className="left">
                <BsFillCircleFill className="icon"/>
                <p>{taskText}</p>
            </div>
            <div className="left">
                <BsXCircle onClick={() => {deleteClick(todos.id)}} className="icon red"/>
            </div>
        </div>
    )
}
 export default Task