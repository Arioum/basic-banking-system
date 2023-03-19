import React, { useState } from 'react'
import axios from 'axios'
import './transfer.scss'

const Transfer = () => {
  const [transferDetails, setTransferDetails] = useState({
    from: '',
    to: '',
    amount: '',
  })
  const [transactionResponse, setTransactionResponse] = useState([])

  console.log(transferDetails);

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
    resetFields()
  }
  console.log(transactionResponse);

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
            <input type="email" name='from' id='fromEmail' onChange={inputHandler} />
          </div>
          <div className="to-section">
            <label htmlFor="fromEmail">To</label>
            <input type="email" name='to' id='toEmail' onChange={inputHandler} />
          </div>
        </div>
        <div className="amount-section">
          <label htmlFor="amount">Amount to be transfered</label>
          <input type="number" name="amount" id="amount" onChange={inputHandler} />
        </div>
        {transactionResponse && <h3>{transactionResponse.message}</h3>}
        <div className="form-btn-container">
          <button type="reset" onClick={resetFields}>Reset</button>
          <button type="submit">Confirm Transfer</button>
        </div>
      </form>
    </section>
  )
}

export default Transfer