import React,{useState} from 'react';
import Task from './Task'
import data from '../helpers/tasks.json'
const Active = () => {
    var activeData = data.Active
    const [tasks,setTasks] = useState(activeData)
    
    const removeTask = (ide) =>{
        const newTasks = [...data.Active].filter(todo => todo.id !== ide)
        data.Active = newTasks
        setTasks(data.Active)
        console.log(data.Active)
    }
    
    const passState = (id) => {
        const toPassTasks = [...data.Active].filter(todo => todo.id === id)
        data.Completed = [toPassTasks[0],...data.Completed]
        removeTask(id)
    }


    return(
        <div className="container noInput">
            <div>
                {tasks.map((todo,index)=><Task key={index+todo.id} 
                                               taskText={todo.value}
                                               deleteClick={removeTask}
                                               passClick={passState}
                                               todos={activeData[index]}/>)}</div>
        </div>
    )
}

export default Active