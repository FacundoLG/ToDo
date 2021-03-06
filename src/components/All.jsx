import React,{useState} from 'react';
import Task from './Task'
import data from '../helpers/tasks.json'
import {AiFillExclamationCircle} from 'react-icons/ai'
var allData= data.All
const All = () =>{
    const [tasks,setTasks] = useState(allData)
    const getNewTask = () =>{
        var newTask = document.getElementById("allInput").value
        document.getElementById("allInput").value = ""
        return newTask
    }
    
    var important = false
    const addTask =() =>{
        var todo = getNewTask()
        todo.replace()
        todo = todo.charAt(0).toUpperCase() + todo.slice(1) //first char to UpperCase
        if(todo !== " " && todo !== ""){
            todo = {
                id: Math.floor(Math.random()*10000),
                value: todo,
                important: important
            }
            const newTasks = [todo,...allData]
            allData = newTasks
            console.log(newTasks)
            setTasks(newTasks)
        }
    }
    const removeTask = (id) =>{
        const newTasks = [...allData].filter(todo => todo.id !== id)
        allData = newTasks
        setTasks(newTasks)
    }
    const passState = (id) =>{
        const toPassTasks = [...allData].filter(todo => todo.id === id)
        data.Active = [toPassTasks[0],...data.Active]
        console.log(data.Active)
        removeTask(id)
    }
    return(
        <div className="container">
            <div className="inputContainer">
                <button className="button important" onClick={() => {important = !important}}> <AiFillExclamationCircle className="important setImportant"/> </button>
                <input className="taskInput" id="allInput"type="text" />
                <button className="button add" onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((todo,index)=><Task key={index+todo.id} 
                                               taskText={todo.value} 
                                               deleteClick={removeTask}
                                               passClick={passState}
                                               todos={allData[index]}
                                               />)}</div>
        </div>
    )
}
export default All