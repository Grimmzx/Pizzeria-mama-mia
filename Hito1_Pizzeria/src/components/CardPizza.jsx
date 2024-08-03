import React from 'react';
import '../assets/styles/CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card pizza-card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
        <p className="card-text"><strong>Precio:</strong> ${price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-primary">Ver más 🍕</a>
          <a href="#" className="btn btn-secondary">Añadir 🛒</a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
