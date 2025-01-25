import React from 'react'
import { RouteObject } from 'react-router'
import { PrivateLayout } from './privateLayout'
const UserProfile = React.lazy(() => import('../../features/profiles/pages/userProfiles'))
const PerformanceMonitoring = React.lazy(() => import('features/system-monitoring/pages/performance-monitoring'))


export const privateRoute: RouteObject[] = [
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <PerformanceMonitoring />,
      },
      {
        path: 'profile',
        element: <UserProfile />,
      }
    ]
  }
  // children: [
  //   {
  //     // index: true,
  //     // element: (
  //     //   <Suspense fallback={<Loader />}>
  //     //   </Suspense>
  //     // )
  //   },
  // ],
  // errorElement: (
  //   <Suspense fallback={<Loader />}>
  //     <ErrorBoundary type={'unknown'} />
  //   </Suspense>
  // )
  // },
]
