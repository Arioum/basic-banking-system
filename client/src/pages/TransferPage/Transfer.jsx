import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import './transfer.scss'

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

const Transfer = () => {
  const [transferDetails, setTransferDetails] = useState({
    from: '',
    to: '',
    amount: '',
  })
  const [transactionResponse, setTransactionResponse] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTransferDetails(values => ({ ...values, [name]: value }))
  }
  const formHandler = (e) => {
    e.preventDefault();

    axios(`${import.meta.env.VITE_REACT_API_URL}/new-transfer`, {
      method: 'POST',
      data: transferDetails,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => setTransactionResponse(res.data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    openModal()
    resetFields()
  }

  const resetFields = () => {
    setTransferDetails({
      from: '',
      to: '',
      amount: '',
    })
  }

  return (
    <section className='transfer-section'>
      <h1>Transfer Money</h1>
      <form onSubmit={formHandler}>
        <div className="from-to-section">
          <div className="from-section">
            <label htmlFor="fromEmail">From</label>
            <input type="email" name='from' id='fromEmail' onChange={inputHandler} validation required />
          </div>
          <div className="to-section">
            <label htmlFor="fromEmail">To</label>
            <input type="email" name='to' id='toEmail' onChange={inputHandler} validation required />
          </div>
        </div>
        <div className="amount-section">
          <label htmlFor="amount">Amount to be transfered</label>
          <input type="number" name="amount" id="amount" onChange={inputHandler} required />
        </div>
        <div className="form-btn-container">
          <button type="reset" onClick={resetFields}>Reset</button>
          <button type="submit">Confirm Transfer</button>
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Transfer Modal"
        ariaHideApp={false}
      >
        <div className="modal-contents">
          <h3>{transactionResponse.message}</h3>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </section>
  )
}

export default Transfer