import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NoteCreate from './pages/NoteCreate'
import NoteDetail from './pages/NoteDetail'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<LandingPage/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/create' element={<NoteCreate />}></Route>
        <Route path='/note/:id' element={<NoteDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
