import React, { useState } from 'react'
import axios from 'axios'
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

    axios(`${import.meta.env.VITE_REACT_API_URL}/new-transfer`, {
      method: 'POST',
      data: transferDetails,
      headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => res.data)
      .catch((err) => console.log(err))

    // axios.post(`${import.meta.env.VITE_REACT_API_URL}/new-transfer`, transferDetails)
    //   .then((res) => res.data)
    //   .catch((err) => console.log(err))
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
        <div className="">
          <button type="reset" onClick={resetFields}>Reset</button>
          <button type="submit">Confirm Transfer</button>
        </div>
      </form>
    </section>
  )
}

export default Transfer