import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tw-elements';
import './index.css'
import { RoutesApp } from './Routes/RoutesApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesApp http={{}} />
  </React.StrictMode>
)
