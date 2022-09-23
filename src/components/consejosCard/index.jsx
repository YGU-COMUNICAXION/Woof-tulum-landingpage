import React from 'react'
import "./styles.css"

export default function ConsejosCard({text, icon}) {
  return (
    <div className='consejosDiv'>
        <p className='consejosP'>{text}</p>
        <img src={icon}/>
    </div>
  )
}
