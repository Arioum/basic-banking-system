import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Logo from '../../assets/logo.svg'
import classes from './navbar.module.scss'

const Navbar = () => {
  const homeRedirect = () => {
    Navigate('/')
  }

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
        <Button variant='secondary' size='small'>View Customers</Button>
        <Button variant='primary' size='small'>Transaction history</Button>
      </div>
    </nav>
  )
}

export default Navbar