import React,{useState} from 'react';
import Nav from '../components/Nav'
import TabsManager from '../components/TabsManager'
const Home = () => {
    var actualtab = "Active"
    const setTab = (tab) => {
        console.log(tab)
        actualtab = tab
    }
    
    return(
        <div>
            {actualtab ? <Nav setTab={setTab} ide={actualtab}/> : <></>}
            <TabsManager/>  
        </div>
    )
}
export default Home