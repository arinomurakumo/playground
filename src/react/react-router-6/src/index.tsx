import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// import { WithCreateRoutesFromElements } from './root/WithCreateRoutesFromElements'
import { WithCreateBrowserRouter } from './root/WithCreateBrowserRouter'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(WithCreateBrowserRouter)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
