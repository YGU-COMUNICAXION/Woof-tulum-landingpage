import React from 'react'
import "./styles.css"

export default function ProcessCard({image, title, text, backgroundColor, color}) {
  return (
    <div className='colorDiv' style={{backgroundColor: `${backgroundColor}` }}>
      <img className='perroImage' src={image}/>
      <h2 style={{color: color}}>{title}</h2>
      <p style={{color: color}}>{text}</p>
    </div>
  )
}
