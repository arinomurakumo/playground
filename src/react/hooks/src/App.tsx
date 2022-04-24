import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/memo">memo</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
