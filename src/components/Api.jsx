import React, { useState } from 'react'
import Card from './Card';

function Api() {
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState('')
  const getData = async (id ='') => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    console.log('respuesta api',response);
    setData(response)
  }
  function HandleChange(e) {
    setSearchId(e.target.value)
  }
  console.log('search ID', searchId);
  console.log('DATA', data);
  return (
    <div className='api--container'>
      <h1>Api</h1>
      <div className='api--imput--container'>
        <input type='text' placeholder='Ingresar ID' onChange={HandleChange}></input>
        <button onClick={() => getData(searchId)}>Get data</button>
      </div>
      <br></br>
      <div className='api--group--card'>
        {data && <Card></Card>}
      </div>
    </div>
  )
}

export default Api