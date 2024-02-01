import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Mainbody from './Components/Mainbody'
import {FaBars,FaTimes,FaArrowRight, FaArrowLeft,FaList} from 'react-icons/fa'

function App() {
  const [bars,Setbars]=useState(false);
  const showsidebar=()=>{
    Setbars(!bars);
  }
  return (
    <>
    <div className="container" >
      {bars?<button className='openbtn' onClick={showsidebar}>
        <FaTimes size="20"/>
        </button>
      :<button className='closebtn' onClick={showsidebar}>
        <FaList size="20"/>
      </button>}
      {bars?<Sidebar/>:""}
      
      <Mainbody/>
    </div>
    </>
  )
}

export default App
