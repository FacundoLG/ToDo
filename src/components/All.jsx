import React from 'react';
import Input from './Input'
import Task from './Task'
import '../assets/styles/All.css'
import data from '../helpers/tasks.json'
class All extends React.Component{
    state ={
        datos: data.All
    }
    refreshData(){
     
    }
    tasks = this.state.datos.map((text,index) => <Task index={index} key={index+text} taskText={text}/>)
    render(){
    return(
        <div className="container">
            <div>
                <Input onClick={this.refreshData}/>
            </div>
            <div>
            { this.tasks}
            </div>
        </div>
    )}
}

export default All