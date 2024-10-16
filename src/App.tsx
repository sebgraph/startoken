import './App.css'
import About from './pages/about';
import Home from './pages/home';
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




function App() {

  return (
    <Router>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <ul>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes>

      </Router> 

  )
}

export default App
