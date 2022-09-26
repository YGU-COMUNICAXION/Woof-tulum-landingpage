import React from 'react'
import "./styles.css"
import useWindowSize from '../../hooks/useWindowSize'

export default function ConsejosCard({text, icon}) {
  const windowSize = useWindowSize()
  return (
    <>
      {windowSize < 752 ? (
      <div className='consejosDiv'>
        <p className='consejosP'>{text}</p>
        <img src={icon}/>
      </div>
      ):(
        <div className='consejosDivDesk'>
          <img src={icon}/>
          <p className='consejosP'>{text}</p>
        </div>
      )}
    </>

  )
}
