import React from 'react';
import '../assets/styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>Tenemos las mejores pizzas que podrías encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
