import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import './reset.css'

const Home = React.lazy(() => import('./pages/Home'))
const Dash = React.lazy(() => import('./pages/Dash'))
const Login = React.lazy(() => import('./pages/Login'))
const Loading = () => (
  <div
    style={{
      background: 'pink',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1>LOADING PAGE</h1>
  </div>
)

export default () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Home path="/" />
      <Dash path="/dash" />
      <Login path="/login" />
    </Router>
  </Suspense>
)
