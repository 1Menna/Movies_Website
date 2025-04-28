import { Routes, Route } from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <div className="bg-neutral text-neutral-content">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Series" element={<Series/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
