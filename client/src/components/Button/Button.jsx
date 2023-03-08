import React from 'react'
import { Link } from 'react-router-dom'
import classes from './button.module.scss'

const BUTTON_STYLE = {
  primary: 'btnPrimary',
  secondary: 'btnSecondary',
  small: 'btnSmall',
  medium: 'btnMedium',
  large: 'btnLarge'
}

const Button = ({ children, variant, size, link, dest }) => {

  if (!link) {
    return (
      <button className={`${classes.button} ${classes[BUTTON_STYLE[variant]]} ${classes[BUTTON_STYLE[size]]}`}>{children}</button>
    )
  }
  return (
    <Link to={dest} className={`${classes.button} ${classes[BUTTON_STYLE[variant]]} ${classes[BUTTON_STYLE[size]]}`}>{children}</Link>
  )
}

export default Button