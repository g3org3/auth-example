import React from 'react'
import { navigate, Link } from '@reach/router'

import withAuth from '../components/withAuth'

const logout = async () => {
  await fetch('/auth/logout', { credentials: 'same-origin' })
  localStorage.setItem('token', '')
  navigate('/login')
}

const Home = ({ user }) => {
  return (
    <div>
      <button onClick={logout}>logout</button> | <Link to="/dash">Dash</Link>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default withAuth(Home)
