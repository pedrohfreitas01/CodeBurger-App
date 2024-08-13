import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'
import Register from './containers/Register/index'

import { ToastContainer, toast } from "react-toastify";





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Register></Register>
      <ToastContainer theme='colored' />
      <GlobalStyles></GlobalStyles>
    </>
  </React.StrictMode>,
)
