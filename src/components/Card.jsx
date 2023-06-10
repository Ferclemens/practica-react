import React from 'react'

function Card({data}) {
  const {id, name, username, email, phone} = data
  console.log('CARD',data);
  return (
    <div className='card--container'>
        <h2 className='card--title'>ID:{id}</h2>
        <p className='card--detail'>Name:{name}</p>
        <p className='card--detail'>Username:{username}</p>
        <p className='card--detail'>Email:{email}</p>
        <p className='card--detail'>Phone:{phone}</p>
    </div>
  )
}

export default Card