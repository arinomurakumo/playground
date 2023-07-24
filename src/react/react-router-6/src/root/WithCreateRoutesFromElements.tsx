import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Navigation from '../routes/Navigation'
import Home from '../routes/Home'
import About from '../routes/About'
import Contact from '../routes/Contact'
import Error from '../routes/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

// createRoutesFromElements は Route コンポーネントを利用してルーティングを設定する場合に利用
export const WithCreateRoutesFromElements = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
