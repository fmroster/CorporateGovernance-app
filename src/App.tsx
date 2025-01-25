import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from 'routes'
import { ThemeProvider } from './providers/theme-provider'
import { Loader } from './components/ui/loader'
export const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <ThemeProvider defaultTheme={'dark'}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
      </React.Suspense>
  )
}