import { RouteObject } from 'react-router'
import PerformanceMonitoring from '../../pages/performance-monitoring'

export const privateRoute: RouteObject[] = [
  {
    path: '/monitoring',
    element: (
      <PerformanceMonitoring />
    )
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