import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default NotFound;
