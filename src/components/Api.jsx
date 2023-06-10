import React, { useEffect, useState } from 'react'
import Card from './Card';
import GetData from './GetData';

function Api() {
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState('')
  
  function HandleChange(e) {
    setSearchId(e.target.value)
  }

  useEffect(()=>{
    const response = async () => {
      const data = await GetData()
      setData(data)
      console.log('DATA desde USEEFFECT',data);
    }
    response()
  },[searchId])

  //console.log('search ID', searchId);
  //console.log('DATA', data);
  return (
    <div className='api--container'>
      <h1>Api</h1>
      <div className='api--imput--container'>
        <input type='text' placeholder='Ingresar ID' onChange={HandleChange}></input>
        <button>Get data</button>
      </div>
      <br></br>
      <div className='api--group--card'>
        {data && data.map((user)=>{
          return <Card data={user} key={user.id} />
        })}
      </div>
    </div>
  )
}

export default Api