import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';  
import { UserProvider, useUser } from './components/UserContext'; 

const ProtectedRoute = ({ children }) => {
  const { token } = useUser(); 
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
