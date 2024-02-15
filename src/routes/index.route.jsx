import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Preloader from '../components/Layouts/Preloader'
import PageNotFound from '../pages/PageNotFound'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Preloader />}>
        <Dashboard />
      </Suspense>
    ),
    children: [
      {
        path: '/notifications',
        element: <></>
      },
      {
        path: '/times',
        element: <></>
      },
      {
        path: '/groups',
        element: <></>
      },
      {
        path: '/wallet',
        element: <></>
      },
      {
        path: '/settings',
        element: <></>
      }
    ]
  },
  {
    path: '*',
    element: <Preloader />
  }
])

export default router
