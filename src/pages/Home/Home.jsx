import React from 'react'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <header>
      <h1>Banking Made Simple</h1>
      <div className="">
        <Button variant='primary' size='large' link={true} dest="/">View all Customers</Button>
        <Button variant='secondary' size='large' link={true} dest="/transactions">Transaction History</Button>
      </div>
    </header>
  )
}

export default Home