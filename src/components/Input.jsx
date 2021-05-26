import React from 'react';
import '../assets/styles/Input.css'
import Button from './Button';
import data from '../helpers/tasks.json'
const Input = (props) =>{
    const {onClick} = props
    const addToList = () =>{
        var inputText = document.getElementById("taskInput").value
        console.log(inputText)
        data.All.push(inputText)
        console.log(data.All)
    }
    return(
        <div className="inputContainer">
            <input id="taskInput"className="taskInput" type="text" placeholder="add details" />
            <Button onClick={addToList} onClick={onClick}text="add"/>
        </div>
    )
}

export default Input