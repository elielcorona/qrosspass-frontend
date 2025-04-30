import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavbarUsuario from "./components/Navbar/NavbarUsuario";
import NavbarPartner from "./components/navbar/NavbarPartner";
import NavbarAdmin from "./components/navbar/NavbarAdmin";

// Pages de Usuario
import PrincipalUsuario from "./pages/usuarios/PrincipalUsuario";
import ProductosUsuario from "./pages/usuarios/ProductosUsuario";
import CarritoUsuario from "./pages/usuarios/CarritoUsuario";
import CanjesUsuario from "./pages/usuarios/CanjesUsuario";
import PuntosUsuario from "./pages/usuarios/PuntosUsuario";
import MiCuentaUsuario from "./pages/usuarios/MiCuentaUsuario";
import HistorialVisitasUsuario from "./pages/usuarios/HistorialVisitasUsuario";
import PlanesUsuario from "./pages/usuarios/PlanesUsuario";
import RegistroUsuario from "./pages/usuarios/RegistroUsuario";
import LoginUsuario from "./pages/usuarios/LoginUsuario";
import UbicacionesUsuario from "./pages/usuarios/UbicacionesUsuario";

// Pages de Partner
import LoginPartner from "./pages/partners/LoginPartner";
import PanelPartner from "./pages/partners/PanelPartner";
import ProductosPartner from "./pages/partners/ProductosPartner";
import UsuariosInternosPartner from "../pages/partners/UsuariosInternosPartner";
import ValidarQRPartner from "./pages/partners/ValidarQRPartner";
import VisitasPartner from "./pages/partners/VisitasPartner";
import RegistroPartner from "./pages/partners/RegistroPartner";

// Pages de Admin
import LoginAdmin from "./pages/admin/LoginAdmin";
import PanelAdmin from "./pages/admin/PanelAdmin";
import SolicitudesAccesoAdmin from "./pages/admin/SolicitudesAccesoAdmin";

function App() {
  const tipoUsuario = sessionStorage.getItem('tipoUsuario'); 
  // "usuario", "partner" o "admin" (por login)

  const renderNavbar = () => {
    if (tipoUsuario === "usuario") return <NavbarUsuario />;
    if (tipoUsuario === "partner") return <NavbarPartner />;
    if (tipoUsuario === "admin") return <NavbarAdmin />;
    return null; // Si no hay nadie logueado
  };

  return (
    <Router>
      {renderNavbar()}

      <div className="container py-5">
        <Routes>

          {/* Rutas Usuarios */}
          <Route path="/" element={<PrincipalUsuario />} />
          <Route path="/productos" element={<ProductosUsuario />} />
          <Route path="/carrito" element={<CarritoUsuario />} />
          <Route path="/canjes" element={<CanjesUsuario />} />
          <Route path="/puntos" element={<PuntosUsuario />} />
          <Route path="/mi-cuenta" element={<MiCuentaUsuario />} />
          <Route path="/historial" element={<HistorialVisitasUsuario />} />
          <Route path="/planes" element={<PlanesUsuario />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/ubicaciones" element={<UbicacionesUsuario />} />
          <Route path="/login-usuario" element={<LoginUsuario />} />

          {/* Rutas Partner */}
          <Route path="/partner/login" element={<LoginPartner />} />
          <Route path="/partner/panel" element={<PanelPartner />} />
          <Route path="/partner/productos" element={<ProductosPartner />} />
          <Route path="/partner/usuarios" element={<UsuariosInternosPartner />} />
          <Route path="/partner/validar-qr" element={<ValidarQRPartner />} />
          <Route path="/partner/visitas" element={<VisitasPartner />} />
          <Route path="/partner/registro" element={<RegistroPartner />} />

          {/* Rutas Admin */}
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/panel" element={<PanelAdmin />} />
          <Route path="/admin/solicitudes" element={<SolicitudesAccesoAdmin />} />

          {/* Catch All */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
