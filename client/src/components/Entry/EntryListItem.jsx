import React from 'react'
import './entry-list-item.scss'

const EntryListItem = ({ customer, transaction }) => {
  const handlePopUp = () => { }


  if (customer) {
    return (
      <tr className="customer-list-item" key={customer._id} onClick={handlePopUp}>
        <td>{customer._id}</td>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.balance}</td>
      </tr>
    )
  }
  return (
    <tr className="customer-list-item" key={transaction._id}>
      <td>{transaction._id}</td>
      <td>{`${transaction.time.slice(0, 10)} - ${transaction.time.slice(11, 19)}`}</td>
      <td>{transaction.from}</td>
      <td>{transaction.to}</td>
      <td>{transaction.amount}</td>
    </tr>
  )
}

export default EntryListItem