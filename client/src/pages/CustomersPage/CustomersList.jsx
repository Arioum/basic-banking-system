import { useState, useEffect } from 'react'
import React from 'react'
import EntryListItem from '../../components/Entry/EntryListItem'
import './customer-list.scss'

const CustomersList = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function getCustomers() {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/customers`);
      const responseJson = await response.json();
      if (responseJson !== customers)
        setCustomers(responseJson);
    }
    getCustomers()
  }, [])

  return (
    <section className='customer-list-section'>
      <h1>Customer Summary</h1>
      <table>
        <tr>
          <th className='th1-ac-no'>Account Number</th>
          <th className='th2-name'>Name</th>
          <th className='th3-email'>Email Address</th>
          <th className='th4-ac-bal'>Account Balance</th>
        </tr>
      </table>

      <div className='table-data-container'>
        <table>
          <tr>
            <th>Account Number</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Account Balance</th>
          </tr>
          {customers.map((customer) => {
            return (
              <>
                <EntryListItem customer={customer} /> 
              </>
            )
          })}
        </table>
      </div>
    </section>
  )
}

export default CustomersList