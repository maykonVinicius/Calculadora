import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './components/Calculator'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
)
