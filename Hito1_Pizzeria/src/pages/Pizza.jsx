import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext'; 
import '../assets/styles/Pizza.css';

const Pizza = () => {
  const { id } = useParams(); 
  const { addItemToCart } = useCart();  
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
    addItemToCart(pizza); 
    console.log('Pizza añadida al carrito:', pizza);
  };

  return (
    <div className="pizza-container">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <h3>Ingredientes</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Precio: ${pizza.price.toLocaleString()}</h2>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
