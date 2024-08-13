import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'
import Register from './containers/Register/index'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Login></Login>
      <GlobalStyles></GlobalStyles>
    </>
  </React.StrictMode>,
)
