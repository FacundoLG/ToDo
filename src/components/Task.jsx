import React,{useState} from 'react';
import {BsFillCircleFill, BsXCircle, BsArrowRight} from "react-icons/bs"
import '../assets/styles/task.css'
const Task = (props) =>{
    const {todos,taskText, deleteClick, passClick, isComplete} = props 
    const [complete, setComplete] = useState(!isComplete)

   
    
    
    return(
        <div className="taskContainer">
            <div className="left">
                <BsFillCircleFill className="icon"/>
                <p>{taskText}</p>
            </div>
            <div className="left">
                <BsXCircle onClick={() => {deleteClick(todos.id)}} className="icon red"/>
                {complete ? <BsArrowRight onClick={() => {passClick(todos.id)}} className="icon orange"/>:""}
            </div>
        </div>
    )
}
 export default Task