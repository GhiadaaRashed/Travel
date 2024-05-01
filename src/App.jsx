import Home from './pages/Home'
import About from './pages/About'
import Packages from './pages/Packages'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Services from './components/Services/Services'
function App() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/packages'  element={<Packages/>}/>
        <Route path='/services'  element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
