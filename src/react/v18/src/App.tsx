import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <ul>
        <li>
          <Link to="/hooks">home</Link>
        </li>
      </ul>
      <h2>hooks</h2>
      <ul>
        <li>
          <Link to="/hooks/memo">memo</Link>
        </li>
        <li>
          <Link to="/hooks/useCallback">useCallback</Link>
        </li>
        <li>
          <Link to="/hooks/useMemo">useMemo</Link>
        </li>
      </ul>
      <h2>React.Lazy</h2>
      <ul>
        <li>
          <Link to="/lazy">lazy</Link>
        </li>
      </ul>
      <h2>React.Suspense</h2>
      <ul>
        <li>
          <Link to="/suspense">suspense</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
