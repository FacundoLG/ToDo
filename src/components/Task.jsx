import React from 'react';
import {BsFillCircleFill, BsFillXCircleFill} from "react-icons/bs"
import '../assets/styles/task.css'
const Task = (props) =>{
    const {taskText, deleteClick, index} = props 
    const clcik = () =>{
        deleteClick(index)

    }
    return(
        <div className="taskContainer">
            <div className="left">
                <BsFillCircleFill className="icon"/>
                <p>{taskText}</p>
            </div>
            <div className="left">
                <BsFillXCircleFill onClick={clcik}className="icon red"/>
            </div>
        </div>
    )
}
 export default Task