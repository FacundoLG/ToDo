import React from 'react';
import '../assets/styles/Input.css'
import Button from './Button';
import data from '../helpers/tasks.json'
const Input = (props) =>{
    const {onClick} = props
    const theClick = () => {
        addToList()
        onClick()
    }
    
    const addToList = () =>{
        var inputText = document.getElementById("taskInput").value
        data.All.push(inputText)
        document.getElementById("taskInput").value = ""
    }
    
    return(
        <div className="inputContainer">
            <input id="taskInput"className="taskInput" type="text" placeholder="add details" />
            <Button onClick={theClick} text="add"/>
        </div>
    )
}

export default Input