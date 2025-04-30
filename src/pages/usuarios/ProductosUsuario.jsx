// src/pages/usuarios/ProductosUsuario.jsx
import { useEffect, useState } from 'react';
import productosData from '../../config/productos.json';

export default function ProductosUsuario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar productos desde JSON (simulación de fetch)
    setProductos(productosData);
  }, []);

  return (
    <section className="text-white">
      <div className="container">
        <h2 className="text-center mb-4">Catálogo de Productos</h2>
        <div className="row g-4">
          {productos.map((producto, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card bg-dark text-white h-100 border border-info shadow">
                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text small">{producto.descripcion}</p>
                  <div className="mt-auto">
                    <p className="fw-bold">{producto.precio} QP</p>
                    <button className="btn btn-info btn-sm w-100">Agregar al carrito</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
