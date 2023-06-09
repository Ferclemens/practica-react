import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
  return (
    <>
        <div>Se a producdo un error!</div>
        <p>{error.message}</p>
        <Link to={'/'}>Volver</Link>
    </>

  )
}

export default ErrorPage