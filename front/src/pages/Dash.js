import React from 'react'
import { navigate, Link } from '@reach/router'

import withAuth from '../components/withAuth'

const logout = async () => {
  await fetch('/auth/logout', { credentials: 'same-origin' })
  localStorage.setItem('token', '')
  navigate('/login')
}

const Dash = ({ user }) => {
  return (
    <div>
      <button onClick={logout}>logout</button> | <Link to="/dash">Dash</Link> |{' '}
      <Link to="/">Home</Link>
      <h1>Dash</h1>
      <table>
        <tr>
          <td>pais</td>
        </tr>
      </table>
    </div>
  )
}

export default withAuth(Dash)
