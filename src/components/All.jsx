import React,{useState} from 'react';
import '../assets/styles/All.css'
import '../assets/styles/Button.css'
import '../assets/styles/Input.css'
import Task from './Task'
import data from '../helpers/tasks.json'

var allData= data.All
var lastTodo
const All = () =>{
    const [tasks,setTasks] = useState(allData)
   
   
    const getNewTask = () =>{
        var newTask = document.getElementById("allInput").value
        console.log(newTask)
        return newTask
    }
    
    const addTask =() =>{
        var todo = getNewTask()
        todo.replace()
        if(todo !== lastTodo && todo !== " " && todo !== ""){
            lastTodo = todo
            const newTasks = [todo,...allData]
            allData = newTasks
            setTasks(newTasks)
        }
    }
    const removeTask = (id) =>{
        const newTasks = [...allData].filter(todo => todo.id !== id)
        allData = newTasks
        setTasks(newTasks)
    }
    return(
        <div className="container">
            <div className="inputContainer">
                <input className="taskInput" id="allInput"type="text" />
                <button className="button add" onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((taskText,index)=><Task key={index} index={index} taskText={taskText} deleteClick={(index) => removeTask(index)}/>)}</div>
        </div>
    )
}
export default All