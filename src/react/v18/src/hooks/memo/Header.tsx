import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/hooks/memo">memo</Link>
      </li>
      <li>
        <Link to="/hooks/memo/sample1">memo/sample1</Link>
      </li>
    </ul>
  )
}
