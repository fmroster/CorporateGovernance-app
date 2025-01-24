import React from 'react'
import { Login } from 'pages/auth/login'

export const publicRoutes = [
  {
    path: '/login',
    element: (
      <Login />
    )
  },
  {
    path: '/',
    element: (
      <Login />
    )
  }
]

