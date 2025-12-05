import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './pages'
import AppRoutes from './routes';

function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App
