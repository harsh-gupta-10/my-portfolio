import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './components/Home.jsx'
import Error from './components/Pages/Error.jsx'
import { createBrowserRouter, createRoutesFromElements, Router } from 'react-router-dom'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>

    <Route path='*' element={<Error />} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)