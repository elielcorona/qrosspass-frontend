// src/components/Navbar/NavbarAdmin.jsx
import { Link } from 'react-router-dom';

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/admin/panel">
          <span className="text-info">Q</span>ross<span className="text-info">Pass</span> Admin
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><Link className="nav-link text-white" to="/admin/solicitudes">Solicitudes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
