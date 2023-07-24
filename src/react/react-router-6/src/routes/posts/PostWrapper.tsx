import { Outlet } from 'react-router-dom'

function PostWrapper() {
  return (
    <>
      <h2>PostWrapper</h2>
      <Outlet />
    </>
  )
}

export default PostWrapper
