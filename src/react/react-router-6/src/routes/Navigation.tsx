import { Link, Outlet } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/todo">todo</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Navigation
