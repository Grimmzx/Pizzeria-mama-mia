import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      alert('Todos los campos son obligatorios.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
     
      await login({ email, password });

      setError(''); 
      alert('Autenticación exitosa');
      navigate('/'); 
    } catch (err) {

      setError('Error al iniciar sesión. Verifica tus credenciales.');
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
