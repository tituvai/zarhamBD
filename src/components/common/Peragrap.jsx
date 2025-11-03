import React from 'react'

const Peragrap = ({peraText, className}) => {
  return (
    <p className={`text-base text-menuC leading-6 ${className}`}>{peraText}</p>
  )
}

export default Peragrap