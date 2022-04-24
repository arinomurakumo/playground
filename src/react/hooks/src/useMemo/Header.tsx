import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/useMemo">useMemo</Link>
      </li>
      <li>
        <Link to="/useMemo/sample1">useMemo/sample1</Link>
      </li>
      <li>
        <Link to="/useMemo/sample2">useMemo/sample2</Link>
      </li>
      <li>
        <Link to="/useMemo/sample3">useMemo/sample3</Link>
      </li>
      <li>
        <Link to="/useMemo/sample4">useMemo/sample4</Link>
      </li>
      <li>
        <Link to="/useMemo/sample5">useMemo/sample5</Link>
      </li>
      <li>
        <Link to="/useMemo/sample6">useMemo/sample6</Link>
      </li>
      <li>
        <Link to="/useMemo/sample7">useMemo/sample7</Link>
      </li>
    </ul>
  )
}
