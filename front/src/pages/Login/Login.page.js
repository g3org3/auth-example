import React, { useState, useEffect } from 'react'
import { Redirect } from '@reach/router'

import { auth, getProfile } from '../../services/auth'
import './login.css'

const useInput = defaultValue => {
  const [val, setVal] = useState(defaultValue)
  return [{ value: val, onChange: ({ target: { value } } = {}) => setVal(value) }, val, setVal]
}

export default () => {
  const [emailProps, email] = useInput('')
  const [passProps, pass] = useInput('')
  const [token, setToken] = useState(() => String(localStorage.token || ''))
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async event => {
    event.preventDefault()
    setLoading(true)
    const token = await auth({ email, pass })
    setToken(token)
    setLoading(false)
  }

  useEffect(() => {
    getProfile(token).then(profile => setProfile(profile))
  }, [token])

  if (profile) return <Redirect to="/" noThrow />

  return (
    <div className="login">
      <h1>Login{loading && ` | authenticating...`}</h1>
      <form onSubmit={login}>
        <input type="text" {...emailProps} disabled={loading} />
        <input type="password" {...passProps} disabled={loading} />
        <button type="submit" disabled={loading}>
          login
        </button>
      </form>
    </div>
  )
}
