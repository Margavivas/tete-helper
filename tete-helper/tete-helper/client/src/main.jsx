import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // llamado al css de base
// en el main se llaman a los componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
