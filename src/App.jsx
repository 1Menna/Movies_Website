import { Routes, Route } from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <div>
          <h1>Movies_Website</h1>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
