import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Smartlook from 'smartlook-client'

Smartlook.init(ea742f720315df03362c8d8b51bf0975f9d13f0a);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)