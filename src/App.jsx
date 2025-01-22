import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { SocialAPI } from './api/api'
import { getUsersAC } from './store/reducers/useReducers'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePages/HomePage'
import Header from './components/Header/Header'
import UsersPage from './pages/UsersPage/usersPage'


function App() {
 
 
  return (
    <>
      <div className='App'>
        <Header/>
           <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/users' element={<UsersPage />}/>
           </Routes>
      </div>
    
    </>
  )
}

export default App
