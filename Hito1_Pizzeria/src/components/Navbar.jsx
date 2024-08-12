import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" onClick={() => onNavigate('home')}>Pizzería Mamma Mía!</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => onNavigate('home')}>🍕 Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => onNavigate('login')}>🔐 Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => onNavigate('register')}>🔐 Register</a>
          </li>
        </ul>
        <span className="navbar-text ml-auto">
          🛒 Total: $25,000
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
