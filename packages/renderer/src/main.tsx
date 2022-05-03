import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'antd/dist/antd.css'

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  root
)
