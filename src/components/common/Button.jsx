import React from 'react'

const Button = ({btnText, className, onClick}) => {
  return (
    <button  onClick={onClick}  className={`textr-base text-primary bg-accent font-medium px-6 py-2 rounded ${className} `}>{btnText}</button>
  )
}

export default Button