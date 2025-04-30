// src/components/Navbar/NavbarPartner.jsx
import { Link } from 'react-router-dom';

export default function NavbarPartner() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/partner/panel">
          <span className="text-info">Q</span>ross<span className="text-info">Pass</span> Partner
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><Link className="nav-link text-white" to="/partner/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/partner/usuarios">Usuarios</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/partner/validar-qr">Validar QR</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/partner/visitas">Visitas</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}