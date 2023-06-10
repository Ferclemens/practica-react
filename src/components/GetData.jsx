import React from 'react'
import { useState } from 'react';

function GetData() {
    const [data, setData] = useState('')
    const response = fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    console.log('respuesta api',response);
    setData(response)
    return data
}

export default GetData