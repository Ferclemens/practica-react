import React from 'react'

function Card() {
  
  return (
    <div className='card--container'>
        <h2 className='card--title'>ID:</h2>
        <p className='card--detail'>Name:</p>
        <p className='card--detail'>Username:</p>
        <p className='card--detail'>Email:</p>
        <p className='card--detail'>Phone:</p>
    </div>
  )
}

export default Card