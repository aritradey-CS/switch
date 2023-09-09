import React, { useState } from 'react'
import './App.css'
import on from './images/on.png'
import off from './images/off.png'

const App = () => {
  const [toggle, settoggle] = useState(false)

  const togglebutton = ()=>{
    settoggle(!toggle)
  }
  return (
    <div align="center">

      <img src={toggle?on:off} className='bulb' alt='' />
      <button className='button' onClick={togglebutton} >{toggle?'on':'off'}</button>
      
    </div>
  )
}

export default App
