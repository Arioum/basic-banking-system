import React, { useState, useEffect } from 'react'
import EntryListItem from '../../components/Entry/EntryListItem'
import './transactions.scss'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    async function getTransactions() {
      const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/transactions`);
      const responseJson = await response.json();
      if (responseJson !== transactions)
        setTransactions(responseJson);
    }
    getTransactions()
  }, [])

  return (
    <>
      <h1>Transaction History</h1>
      <section className='transaction-page'>
        <table>
          <tr>
            <th>Transaction ID</th>
            <th>From</th>
            <th>To</th>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
          <EntryListItem />
        </table>
      </section>
    </>
  )
}

export default Transactions