import React,{useState} from 'react';
import Nav from '../components/Nav'
import All from '../components/All';
import Active from '../components/Active';
import '../assets/styles/All.css'
import '../assets/styles/Button.css'
import '../assets/styles/Input.css'
let actualTab = "All"
const Home = () => {
    const [tab, setTab] = useState(actualTab)

    const getTab = (tabid) => {
        setTab(tabid)
        console.log(tabid)
    }
    
    return(
        <div>
            <Nav setTab={getTab} />
            {tab === "All" ? <All/> : ""}
            {tab === "Active" ? <Active/>: ""}
        </div>
    )
}
export default Home