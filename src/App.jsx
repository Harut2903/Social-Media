import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePages/HomePage'
import Header from './components/Header/Header'
import UsersPage from './pages/UsersPage/UsersPage'


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
