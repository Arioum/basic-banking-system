import { useState, useEffect } from 'react'
import React from 'react'

const CustomersList = () => {
  const [customers, setCustomers] = useState('')

  useEffect(() => {
    async function getCustomers() {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/all-customers`);
      const responseJson = await response.json();
      setCustomers(responseJson.body);
    }
    getCustomers()
  }, [])

  return (
    <section>
      <h1>Customers</h1>
      {/* {customers.map((customer) => {
        <div className="" key={customer._id}>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.email}</p>
          </div>
        return (
          <p>{customers.body}</p>
        )
      })} */}
      <p>{customers}</p>
    </section>
  )
}

export default CustomersList