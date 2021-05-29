import React,{useState} from 'react';
import Task from './Task'
import data from '../helpers/tasks.json'

const Completed = () => {
    const completeData = data.Completed
    const [tasks,setTasks] = useState(completeData)
    
    const deleteAll = () =>{
        data.Completed = []
        setTasks(data.Completed)
        console.log(data)
    }

    const removeTask = (ide) =>{
        const newTasks = [...data.Completed].filter(todo => todo.id !== ide)
        data.Completed = newTasks
        setTasks(data.Completed)
        console.log(data.Completed)
    }

    return(
        <div className="container noInput">
            <div>
                {tasks.map((todo,index)=><Task key={index+todo.id} 
                                               taskText={todo.value}
                                               isComplete={true}
                                               deleteClick={removeTask}
                                               todos={completeData[index]}/>)}
            </div>
            <div className="inputContainer right">
                {tasks.length >= 1 ? <button onClick={deleteAll} className="button delete">delete all</button>: ""}
            </div>
        </div>
    )
}
export default Completed