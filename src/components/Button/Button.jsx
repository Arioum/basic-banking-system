import React from 'react'
import classes from './button.module.scss'

const BUTTON_STYLE = {
  primary: 'btnPrimary',
  secondary: 'btnSecondary',
  small: 'btnSmall',
  medium: 'btnMedium'
}

const Button = ({ children, variant, size }) => {
  return (
    <button className={`${classes.button} ${classes[BUTTON_STYLE[variant]]} ${classes[BUTTON_STYLE[size]]}`}>{children}</button>
  )
}

export default Button