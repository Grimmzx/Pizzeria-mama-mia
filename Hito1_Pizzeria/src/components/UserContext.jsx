import React, { createContext, useContext, useState, useEffect } from 'react';


const UserContext = createContext();


export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {

  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);


  const login = async ({ email, password }) => {
    try {

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

     
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email); 
        localStorage.setItem("token", data.token); 
        localStorage.setItem("email", data.email); 
      } else {
        console.error("Error al iniciar sesión:", response.statusText);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    }
  };


  const register = async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
      } else {
        console.error("Error al registrarse:", response.statusText);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    }
  };

 
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };


  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Perfil del usuario:", data);
        return data;
      } else {
        console.error("Error al obtener el perfil:", response.statusText);
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
    }
  };


  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("email");
    if (savedToken && savedEmail) {
      setToken(savedToken);
      setEmail(savedEmail);
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
