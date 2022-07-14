import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/hooks/useCallback">useCallback</Link>
      </li>
      <li>
        <Link to="/hooks/useCallback/sample1">useCallback/sample1</Link>
      </li>
      <li>
        <Link to="/hooks/useCallback/sample2">useCallback/sample2</Link>
      </li>
    </ul>
  )
}
