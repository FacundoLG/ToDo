import React,{useState} from 'react';
import '../assets/styles/All.css'
import '../assets/styles/Button.css'
import '../assets/styles/Input.css'
import Task from './Task'
import data from '../helpers/tasks.json'

var allData= data.All
const All = () =>{
    const [tasks,setTasks] = useState(allData)
   
   
    const getNewTask = () =>{
        var newTask = document.getElementById("allInput").value
        console.log(newTask)
        return newTask
    }
    
    const addTask =(todo) =>{
        todo = getNewTask()
        const newTasks = [todo,...allData]
        allData = newTasks
        setTasks(newTasks)
        console.log(allData)
    }
    return(
        <div className="container">
            <div className="inputContainer">
                <input className="taskInput" id="allInput"type="text" />
                <button className="button add" onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((taskText,index)=> <Task key={index+taskText} taskText={taskText} index={index}/>)}
            </div>
        </div>
    )
}
export default All