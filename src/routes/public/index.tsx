import React from 'react'
import { Login, ResetPassword, SignUp } from 'features/authentication/pages'

export const publicRoutes = [
  {
    path: '/login',
    element: (
      <Login />
    )
  },
  {
    path: '/reset-password',
    element: (
      <ResetPassword />
    )
  },
  {
    path: '/sign-up',
    element: (
      <SignUp />
    )
  }
]

