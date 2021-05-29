import React from 'react';
import '../assets/styles/Nav.css'

const Nav = (props) =>{
    const {setTab} = props
    const setInactive = (id) =>{
        document.getElementById(id).style.borderBottom = "solid rgba(163, 163, 163, 0) 2px"
    }
    const toTab = (id) => {
        if(id){
            setInactive("All")
            setInactive("Active")
            setInactive("Completed")
            document.getElementById(id).style.borderBottom = "2px rgb(0, 153, 255) solid"
        }
        setTab(id)
    }
 
    return(
        <div className="navContainer">
            <h2 className="title">#todo</h2>
            <div className="nav">
                <button className="tabs" id="All" onClick={(e) => {toTab(e.target.id)}}>All</button>
                <button className="tabs" id="Active" onClick={(e) => {toTab(e.target.id)}}>Active</button>
                <button className="tabs" id="Completed" onClick={(e) =>{ toTab(e.target.id)}}>Completed</button>
            </div>
        </div>
    )
    
}

export default Nav