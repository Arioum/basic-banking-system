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
        setTransactions('');
    }
    getTransactions()
  }, [])

  return (
    <>
      <section className='transaction-page'>
        <h1>Transaction History</h1>
        <table>
          <tr>
            <th>Transaction ID</th>
            <th>From</th>
            <th>To</th>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
        </table>

        <div className='table-data-container'>
          <table>
            <tr>
              <th>Transaction ID</th>
              <th>From</th>
              <th>To</th>
              <th>Transaction Type</th>
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