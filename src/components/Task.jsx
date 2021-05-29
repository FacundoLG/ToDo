import React from 'react';
import {BsFillCircleFill, BsXCircle, BsArrowRight} from "react-icons/bs"
import '../assets/styles/task.css'
const Task = (props) =>{
    const {todos,taskText, deleteClick, passClick} = props 
   
    return(
        <div className="taskContainer">
            <div className="left">
                <BsFillCircleFill className="icon"/>
                <p>{taskText}</p>
            </div>
            <div className="left">
                <BsXCircle onClick={() => {deleteClick(todos.id)}} className="icon red"/>
                <BsArrowRight onClick={() => {passClick(todos.id)}} className="icon orange"/>
            </div>
        </div>
    )
}
 export default Task