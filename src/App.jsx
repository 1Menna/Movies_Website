import { Routes, Route } from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Home from './Pages/Home'
import Details from './Pages/Details'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
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
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
