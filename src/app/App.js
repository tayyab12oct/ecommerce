import React from 'react'
import Login from 'pages/authentication/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/app/home'
import Router from 'router'

function App() {
  return (
    <BrowserRouter>
      <Router />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
