// src/components/Navbar/NavbarUsuario.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

export default function NavbarUsuario() {
  const { carrito } = useContext(CarritoContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-transparent px-4">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2 text-white" to="/">
            <i className="text-info" style={{ width: '26px', height: '26px' }}>🔲</i>
            <h5 className="m-0 fw-bold fs-4">
              <span className="text-info">Q</span>ross<span className="text-info">Pass</span>
            </h5>
          </Link>
          <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/mi-cuenta">Mi Cuenta</Link></li>
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/ubicaciones">Ubicaciones</Link></li>
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/historial">Historial</Link></li>
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/planes">Planes</Link></li>
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/productos">Productos</Link></li>
              <li className="nav-item"><Link className="nav-link nav-page text-white" to="/login-usuario" id="logout">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Botón flotante de carrito */}
      <button
        onClick={() => window.location.href = '/carrito'}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#17c1e8',
          color: 'black',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 20px',
          fontWeight: 'bold',
          boxShadow: '0 0 10px #17c1e8',
          zIndex: 9999,
        }}>
        🛒 Carrito <span className="badge bg-dark ms-2">{carrito.length}</span>
      </button>
    </>
  );
}
