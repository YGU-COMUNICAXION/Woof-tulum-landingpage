import React from 'react'
import "./styles.css"

export default function ManchaCard({backgroundImage, children}) {
  return (
    <div className='manchaDiv' style={{backgroundImage: `url(${backgroundImage})`}}>
        {children}
    </div>
  )
}
