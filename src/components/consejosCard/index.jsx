import React from 'react'
import "./styles.css"

export default function ConsejosCard({text, icon}) {
  return (
    <div className='consejosDiv'>
        <p>{text}</p>
        <img src={icon}/>
    </div>
  )
}
