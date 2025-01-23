import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from 'routes'
import { ThemeProvider } from './providers/theme-provider'

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme={'dark'}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
  )
}