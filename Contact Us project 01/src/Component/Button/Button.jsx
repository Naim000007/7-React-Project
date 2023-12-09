import React from 'react'
import './Button.css'

function Button({text, icone, isTrue}) {
  return (
    <button className={isTrue ? "outline_btn":"primary_btn" }>
     {icone}
     {text} 
    </button>
  )
}

export default Button
