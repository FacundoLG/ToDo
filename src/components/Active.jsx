import React,{useState} from 'react';
import Task from './Task'
import data from '../helpers/tasks.json'
var allData = data.All
var lastTodo
const Active = () => {
    const [tasks,setTasks] = useState(allData)
    const addTask = () => {}  

    return(
        <div className="container">
            <div className="inputContainer">
                <input className="taskInput" id="allInput"type="text" />
                <button className="button add" onClick={addTask}>add</button>
            </div>
            <div>
                {tasks.map((todo,index)=><Task key={index+todo.id} 
                                               taskText={todo.value} 
                                               todos={allData[index]}/>)}</div>
        </div>
    )
}

export default Active