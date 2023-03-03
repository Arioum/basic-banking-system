import React from 'react'
import Button from '../../components/Button/Button'
import Logo from '../../assets/logo.svg'
import classes from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className="navbar__logo">
        <img src={Logo} alt="logo" width={50} />
        <span>AMR BANK</span>
      </div>
      <div className={classes.navbar__navLinkContainer}>
        <li className={classes.navbar__navLinkContainer__navItems}>About Us</li>
        <li className={classes.navbar__navLinkContainer__navItems}>Team</li>
        <li className={classes.navbar__navLinkContainer__navItems}>Contact Us</li>
        <li className={classes.navbar__navLinkContainer__navItems}>Help</li>
      </div>
      <div className={classes.navbar__btnContainer}>
        <Button variant='secondary' size='small'>Log in</Button>
        <Button variant='primary' size='small'>Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar