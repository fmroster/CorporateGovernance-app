import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from 'routes'

export const App: React.FC = () => {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
}