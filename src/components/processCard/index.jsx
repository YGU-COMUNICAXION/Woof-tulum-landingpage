import React from 'react'
import "./styles.css"

export default function ProcessCard({image, title, text, backgroundColor}) {
  return (
    <div className='proccessMainDiv'>
        <div className='processCardContent'>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <div className='colorDiv' style={{backgroundColor: `${backgroundColor}` }}/>
    </div>
  )
}
