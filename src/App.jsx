import Navbar from './components/Navbar'
import Home from './components/Home'
import MapSection from './components/MapSection'
import Comunidad from './components/Comunidad'
import LoginForm from './components/LoginForm'
import Enciclopedia from './components/Enciclopedia'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App
