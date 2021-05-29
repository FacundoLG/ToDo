import React,{useState} from 'react';
import Nav from '../components/Nav'
import All from '../components/All';
import Active from '../components/Active';
import Completed from '../components/Completed';
import '../assets/styles/All.css'
import '../assets/styles/Button.css'
import '../assets/styles/Input.css'
import '../assets/styles/task.css'
let actualTab = "All"
const Home = () => {
    const [tab, setTab] = useState(actualTab)

    const getTab = (tabid) => {
        setTab(tabid)
    }
    
    return(
        <div>
            <Nav setTab={getTab} />
            {tab === "All" ? <All/> : ""}
            {tab === "Active" ? <Active/>: ""}
            {tab === "Completed" ? <Completed/> : ""}
        </div>
    )
}
export default Home