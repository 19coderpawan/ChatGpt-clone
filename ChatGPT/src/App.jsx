import { useState } from 'react'

import './App.css'
import Sidebar from './Components/Sidebar'
import Mainbody from './Components/mainbody'

function App() {
  return (
    <>
    <div className="container">
      <Sidebar/>
      <Mainbody/>
    </div>
    </>
  )
}

export default App
