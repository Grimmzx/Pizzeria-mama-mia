import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

const Home = ({ handleAddToCart }) => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza pizza={pizza} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
