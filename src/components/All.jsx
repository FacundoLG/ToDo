import React from 'react';
import Input from './Input'
import Task from './Task'
import '../assets/styles/All.css'
import data from '../helpers/tasks.json'
const All = () =>{
    var allData = data.All
    return(
        <div className="container">
            <div>
                {/* Input */}
                <Input onClick={All}/>
            </div>
            <div>
               {allData.map((n,index) => <Task index={index} key={index+n} taskText={n}/>)}
            </div>
        </div>
    )
}

export default All