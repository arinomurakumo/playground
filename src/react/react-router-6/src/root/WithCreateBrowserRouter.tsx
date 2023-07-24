import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from '../routes/Navigation'
import Home from '../routes/Home'
import About from '../routes/About'
import Contact from '../routes/Contact'
import Error from '../routes/Error'
import PostWrapper from '../routes/PostWrapper'
import Posts, { loader as postsLoader } from '../routes/Posts'
import Post, { loader as postLoader } from '../routes/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      // {
      //   path: 'posts',
      //   element: <Posts />,
      //   loader: postsLoader,
      // },
      {
        path: 'posts',
        element: <PostWrapper />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])

// createRoutesFromElements は Route コンポーネントを利用してルーティングを設定する場合に利用
export const WithCreateBrowserRouter = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
