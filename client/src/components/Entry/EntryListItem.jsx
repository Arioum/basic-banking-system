import React, { useState } from 'react'
import Modal from 'react-modal'
import './entry-list-item.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2em'
  },
};


const EntryListItem = ({ customer, transaction }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  if (customer) {
    return (
      <>
        <tr className="customer-list-item" key={customer._id} onClick={openModal}>
          <td>{customer._id}</td>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.balance}</td>
        </tr>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Customer details Modal"
          ariaHideApp={false}
        >
          <div className="modal-contents">
            <h4>Account Number : {customer._id}</h4>
            <h4>Account Holder : {customer.name}</h4>
            <h4>Linked Email : {customer.email}</h4>
            <h4>Account Balance : {customer.balance}</h4>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </>
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