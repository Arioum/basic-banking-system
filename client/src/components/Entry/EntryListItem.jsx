import React from 'react'
import './entry-list-item.scss'

const EntryListItem = ({ customer, transaction }) => {

  if (customer) {
    return (
      <tr className="customer-list-item" key={customer._id}>
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
      <td>amoghrao@gmail.com</td>
      <td>Paul@gmail.com</td>
      <td>CREDIT</td>
      <td>4100</td>
    </tr>
  )
}

export default EntryListItem