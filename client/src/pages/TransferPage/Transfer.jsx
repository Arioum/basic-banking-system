import React, { useState } from 'react'
import './transfer.scss'

const Transfer = () => {
  const [transferDetails, setTransferDetails] = useState({
    from: '',
    to: '',
    amount: '',
  })

  console.log(transferDetails);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTransferDetails(values => ({ ...values, [name]: value }))
  }
  const formHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className='transfer-section'>
      <h1>Transfer Money</h1>
      <form onSubmit={formHandler}>
        <div className="from-to-section">
          <div className="from-section">
            <label htmlFor="fromEmail">From</label>
            <input type="email" name='' id='fromEmail' value={transferDetails.from} onChange={inputHandler} />
          </div>
          <div className="to-section">
            <label htmlFor="fromEmail">To</label>
            <input type="email" name='' id='fromEmail' value={transferDetails.to} onChange={inputHandler} />
          </div>
        </div>
        <div className="amount-section">
          <label htmlFor="amount">Amount to be transfered</label>
          <input type="number" name="" id="amount" value={transferDetails.amount} onChange={inputHandler} />
        </div>
        <div className="">
          <button type="reset">Reset</button>
          <button type="submit">Confirm Transfer</button>
        </div>
      </form>
    </section>
  )
}

export default Transfer