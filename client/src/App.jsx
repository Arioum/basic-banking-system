import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import CustomersList from './pages/CustomersPage/CustomersList'
import Transactions from './pages/TransactionPage/Transactions'
import Transfer from './pages/TransferPage/Transfer'

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-customers' element={<CustomersList />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/transfer' element={<Transfer />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App