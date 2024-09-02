import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">🔐 Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">🔐 Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">👤 Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒 Total de carrito: ${total ? total.toLocaleString() : '0.00'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
