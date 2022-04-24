import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Parent as Memo } from './memo'
import { Parent as MemoSample1 } from './memo/Sample1'
import { Parent as UseCallback } from './useCallback'
import { Parent as UseCallbackSample1 } from './useCallback/Sample1'
import { Parent as UseCallbackSample2 } from './useCallback/Sample2'
import { Parent as UseMemo } from './useMemo'
import { Parent as UseMemoSample1 } from './useMemo/Sample1'
import { Parent as UseMemoSample2 } from './useMemo/Sample2'
import { Parent as UseMemoSample3 } from './useMemo/Sample3'
import { Parent as UseMemoSample4 } from './useMemo/Sample4'
import { Parent as UseMemoSample5 } from './useMemo/Sample5'
import { Parent as UseMemoSample6 } from './useMemo/Sample6'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="memo" element={<Memo />} />
        <Route path="memo/sample1" element={<MemoSample1 />} />
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="useCallback/sample1" element={<UseCallbackSample1 />} />
        <Route path="useCallback/sample2" element={<UseCallbackSample2 />} />
        <Route path="useMemo" element={<UseMemo />} />
        <Route path="useMemo/sample1" element={<UseMemoSample1 />} />
        <Route path="useMemo/sample2" element={<UseMemoSample2 />} />
        <Route path="useMemo/sample3" element={<UseMemoSample3 />} />
        <Route path="useMemo/sample4" element={<UseMemoSample4 />} />
        <Route path="useMemo/sample5" element={<UseMemoSample5 />} />
        <Route path="useMemo/sample6" element={<UseMemoSample6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
