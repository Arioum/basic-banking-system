import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Logo from '../../assets/logo.svg'
import classes from './navbar.module.scss'

const Navbar = () => {
  const [routeParams, setRouteParams] = useState('');
  let { param } = useParams();
  console.log(param);
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate('/')
  }

  useEffect(() => {
    setRouteParams(param)
  }, [param])

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo} onClick={homeRedirect}>
        <img src={Logo} alt="logo" width={50} />
        <span>AMR BANK</span>
      </div>
      <div className={classes.navbar__navLinkContainer}>
        <li className={classes.navbar__navLinkContainer__navItems}>About Us</li>
        <li className={classes.navbar__navLinkContainer__navItems}>Team</li>
        <li className={classes.navbar__navLinkContainer__navItems}>Contact Us</li>
      </div>
      <div className={classes.navbar__btnContainer}>
        {routeParams === "all-customers" ? (
          <Button variant='primary' size='small' link={true} dest="/transactions">Transaction history</Button>
        ) : (
          <Button variant='secondary' size='small' link={true} dest="/all-customers">View Customers</Button>
        )}
        <Button variant='primary' size='small' link={true} dest="/transactions">Transfer Money</Button>
      </div>
    </nav>
  )
}

export default Navbar