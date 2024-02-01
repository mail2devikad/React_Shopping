import React from 'react'
import "../styles/style.css" 

const Button = ({label}) => {
  return (
    <div>
      <button className="login_button">{label}</button>
    </div>
  )
}

export default Button
