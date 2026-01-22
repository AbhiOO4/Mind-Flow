import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NoteCreate from './pages/NoteCreate'
import NoteDetail from './pages/NoteDetail'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProtectedRoutes from './utils/ProtectedRoutes'
import IsLoggedIn from './utils/IsLoggedIn'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>

        <Route element={<IsLoggedIn />}>
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<SignUp />} ></Route>
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/create' element={<NoteCreate />}></Route>
          <Route path='/note/:id' element={<NoteDetail />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
