import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';  
import '../assets/styles/CardPizza.css'; 

const CardPizza = ({ pizza }) => {
  const { addItemToCart } = useCart();  

  return (
    <div className="card pizza-card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>
              <span role="img" aria-label="pizza">🍕</span> {ingredient}
            </li>
          ))}
        </ul>
        <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">
            Ver más 👀
          </Link>
          <button className="btn btn-danger" onClick={() => addItemToCart(pizza)}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
