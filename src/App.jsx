import { Routes, Route } from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <div className="bg-black text-neutral-content">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Series" element={<Series/>}/>
            <Route path="/Details" element={<Details/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
