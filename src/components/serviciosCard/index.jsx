import React from 'react'
import "./styles.css"

export default function ServiciosCard({icon, text, backgroundColor}) {
  return (
    <div className='serviciosMainDiv' style={{backgroundColor: `${backgroundColor}` }}>
        <img src={icon}/>
        <p>{text}</p>
    </div>
  )
}
