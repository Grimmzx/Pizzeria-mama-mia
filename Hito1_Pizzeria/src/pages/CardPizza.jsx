import React from 'react';
import '../assets/styles/CardPizza.css';

const CardPizza = ({ pizza, onAddToCart }) => {
  return (
    <div className="card pizza-card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Ver más 🍕</button>
                                              
          <button className="btn btn-secondary" onClick={() => onAddToCart(pizza)}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
