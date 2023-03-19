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
      <section className='transaction-page'>
        <h1>Transaction History</h1>
        <table>
          <tr>
            <th className='th1'>Transaction ID</th>
            <th className='th2'>Date & Time</th>
            <th className='th3'>From</th>
            <th className='th4'>To</th>
            <th className='th5'>Amount</th>
          </tr>
        </table>

        <div className='table-data-container'>
          <table>
            <tr>
              <th>Transaction ID</th>
              <th>Date & Time</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
            </tr>
            {!transactions ? (
              <h2>No Transactions yet</h2>
            ) : (
              transactions.map((transaction) => {
                return (
                  <>
                    <EntryListItem transaction={transaction} />
                  </>
                )
              })
            )}
          </table>
        </div>
      </section>
    </>
  )
}

export default Transactions