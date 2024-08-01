import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import {AppRouter} from '@core/index'
import 'normalize.css'
import './main.tsx.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter>
  </React.StrictMode>,
)
