import { useState, useEffect } from 'react'
import React from 'react'

const CustomersList = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    async function getCustomers() {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/customers`);
      const responseJson = await response.json();
      setCustomers(responseJson);
    }
    getCustomers()
  }, [])

  return (
    <section>
      <h1>Customers</h1>
      {customers.map((customer) => {
        return (
          <div className="customer-item" key={customer._id}>
            <p>{customer.name}</p>
            <p>{customer.email}</p>
            <p>{customer.balance}</p>
          </div>
        )
      })}
    </section>
  )
}

export default CustomersList