import React from 'react'
import "../styles/style.css" 

const Button = ({label,onClick}) => {
  return (
    <div>
      <button 
      onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
