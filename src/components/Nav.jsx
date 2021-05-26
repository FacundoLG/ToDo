import {React} from 'react';
import '../assets/styles/Nav.css'

const Nav = () =>{
    const setInactive = (id) =>{
        document.getElementById(id).style.borderBottom = "solid rgba(163, 163, 163, 0) 2px"
    }

    const toTab = (e) => {

        const { id } = e.target 
        if(id){
            setInactive("All")
            setInactive("Active")
            setInactive("Completed")
            document.getElementById(id).style.borderBottom = "2px rgb(0, 153, 255) solid"
        }
    }

    return(
        <div className="navContainer">
            <h2 className="title">#todo</h2>
            <div className="nav">
                <button className="tabs" id="All" onClick={toTab}>All</button>
                <button className="tabs" id="Active" onClick={toTab}>Active</button>
                <button className="tabs" id="Completed" onClick={toTab}>Completed</button>
            </div>
        </div>
    )
}

export default Nav