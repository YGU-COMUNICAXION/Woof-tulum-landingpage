import React from 'react'
import "./styles.css"

export default function contactoCard({icon, title, info, children}) {
  return (
    <div className='contactoCardDiv'>
        <div className='contactoUpperDiv'>
            <img src={icon}/>
            <h3>{title}</h3>
        </div>
        <p>{info}</p>
        {children}
    </div>
  )
}
