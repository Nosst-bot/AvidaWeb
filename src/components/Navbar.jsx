import Avida from '/src/assets/react.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mapa">
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
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" id="myAccountBtn">
                Mi cuenta
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}
