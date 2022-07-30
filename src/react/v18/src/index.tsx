import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Parent as Memo } from './hooks/memo'
import { Parent as MemoSample1 } from './hooks/memo/Sample1'
import { Parent as UseCallback } from './hooks/useCallback'
import { Parent as UseCallbackSample1 } from './hooks/useCallback/Sample1'
import { Parent as UseCallbackSample2 } from './hooks/useCallback/Sample2'
import { Parent as UseMemo } from './hooks/useMemo'
import { Parent as UseMemoSample1 } from './hooks/useMemo/Sample1'
import { Parent as UseMemoSample2 } from './hooks/useMemo/Sample2'
import { Parent as UseMemoSample3 } from './hooks/useMemo/Sample3'
import { Parent as UseMemoSample4 } from './hooks/useMemo/Sample4'
import { Parent as UseMemoSample5 } from './hooks/useMemo/Sample5'
import { Parent as UseMemoSample6 } from './hooks/useMemo/Sample6'
import LazyTest from './lazy'
import SuspenseComponent from './suspense'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="hooks/memo" element={<Memo />} />
        <Route path="hooks/memo/sample1" element={<MemoSample1 />} />
        <Route path="hooks/useCallback" element={<UseCallback />} />
        <Route
          path="hooks/useCallback/sample1"
          element={<UseCallbackSample1 />}
        />
        <Route
          path="hooks/useCallback/sample2"
          element={<UseCallbackSample2 />}
        />
        <Route path="hooks/useMemo" element={<UseMemo />} />
        <Route path="hooks/useMemo/sample1" element={<UseMemoSample1 />} />
        <Route path="hooks/useMemo/sample2" element={<UseMemoSample2 />} />
        <Route path="hooks/useMemo/sample3" element={<UseMemoSample3 />} />
        <Route path="hooks/useMemo/sample4" element={<UseMemoSample4 />} />
        <Route path="hooks/useMemo/sample5" element={<UseMemoSample5 />} />
        <Route path="hooks/useMemo/sample6" element={<UseMemoSample6 />} />
        <Route path="lazy" element={<LazyTest />} />
        <Route path="suspense" element={<SuspenseComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
