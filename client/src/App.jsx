import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CustomersList from './pages/CustomersPage/CustomersList'
import Transactions from './pages/TransactionPage/Transactions'
import Home from './pages/HomePage/Home'

import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-customers' element={<CustomersList />} />
          <Route path='/transactions' element={<Transactions />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App