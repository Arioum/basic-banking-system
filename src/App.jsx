import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Transactions from './pages/Transactions/Transactions'
import Home from './pages/Home/Home'

import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Transactions />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App