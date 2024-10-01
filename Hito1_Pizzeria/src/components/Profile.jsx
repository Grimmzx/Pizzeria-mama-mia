import React, { useEffect, useState } from 'react';
import { useUser } from '../components/UserContext'; 

function Profile() {
  const { getProfile, logout } = useUser(); 
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getProfile(); 
        setEmail(userProfile.email); 
      } catch (error) {
        console.error('Error obteniendo el perfil:', error);
      }
    };

    fetchProfile();
  }, [getProfile]);

  const handleLogout = () => {
    logout(); 
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
