import React from 'react'
import EntryListItem from '../../components/Entry/EntryListItem'
import './transactions.scss'

const Transactions = () => {
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