import React,{useState} from 'react';
import Task from './Task'
import data from '../helpers/tasks.json'

const Completed = () => {
    const completeData = data.Completed
    const [tasks,setTasks] = useState(completeData)
    
    return(
        <div className="container noInput">
            <div>
                {tasks.map((todo,index)=><Task key={index+todo.id} 
                                               taskText={todo.value}
                                               todos={completeData[index]}/>)}</div>
        </div>
    )
}
export default Completed