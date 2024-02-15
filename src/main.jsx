import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/webfonts/Montserrat.css'
import './styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.route'
import DashboardUIContextProvider from './contexts/useDashboardUIContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardUIContextProvider>
      <RouterProvider router={router} />
    </DashboardUIContextProvider>
  </React.StrictMode>
)
