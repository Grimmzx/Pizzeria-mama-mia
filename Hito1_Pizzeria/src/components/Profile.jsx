import React from 'react';

function Profile() {
  const email = "prueba@prueba.com";

  const handleLogout = () => {
   
    console.log("Cerrando sesión...");
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Profile;
