import Navbar from './components/Navbar';
import Home from './components/Home';
import MapSection from './components/MapSection';
import Comunidad from './components/Comunidad';
import LoginForm from './components/LoginForm';
import NoPage from './components/NoPage';
import Comentarios from './components/Comentarios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />} />

        <Route path="/comentarios" element={<Comentarios />} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
