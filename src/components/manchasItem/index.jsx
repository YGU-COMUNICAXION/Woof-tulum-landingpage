import React from 'react'
import "./styles.css"

export default function ManchasItem({image, text}) {
  return (
    <div className='manchasItemDiv'>
        <img src={image}/>
        <p>{text}</p>
    </div>
  )
}
