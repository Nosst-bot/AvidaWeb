import Avida from '/src/assets/react.svg'
import { useNavigate } from 'react-router-dom';

export default function Navbar({type}) {

  const navigate = useNavigate();


  if (type === "user") {return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-light navbar-custom bg-light">
        <div className='container'> 
        <a className="navbar-brand" href="#">
          <img src={Avida} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-2">
            <li className="nav-item active">
              <a className="nav-link" onClick={()=> navigate("/")} href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#mapa">
                Mapa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#comunidad">
                Comunidad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planner">
                Planificador
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Enciclopedia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="myAccountBtn">
                Mi cuenta
              </a>
            </li>
          </ul>
          <ul className="navbar-nav gap-3">
          <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/login")} href="#" id="myAccountBtn">
                Iniciar Sesión
              </a>
            </li>
            <li className='nav-item'>
              <button className='btn btn-outline-primary'>Registrarse</button>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )}

  if (type === "admin") {
    
  }
}
