import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Events from './pages/Events'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
    </div>
  )
}

export default App
